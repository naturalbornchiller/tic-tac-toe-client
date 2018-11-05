const api = require('./api.js')
const ui = require('./ui.js')
//const store = require('../store.js')
//const app = require('../app.js')

//GAME EVENTS---------------------------------------------------
const onStartGame = function (event) {
    event.preventDefault()
    document.getElementById('game-board').hidden = false
    api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGamefailure)
}

const onStartNewGame = function (event) {
    event.preventDefault()
    $('td').empty()
    boardArray = []
    totalsBoardArray = []
    currentPlayer = "X"
    //store.clickEvents()
    api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGamefailure)
}

let currentPlayer = "X"
let moveMade = false
let boardArray = []
let totalsBoardArray = []
let overOrNot = false

const gameOver = function (){
    document.getElementById('playagainbutton').hidden = false
}

const gameEngine = function () {
      if (totalsBoardArray.length < 9) {
        if (boardArray[0] === 'O' && boardArray[1] === 'O' && boardArray [2] === 'O' ||
            boardArray[3] === 'O' && boardArray[4] === 'O' && boardArray [5] === 'O' ||
            boardArray[6] === 'O' && boardArray[7] === 'O' && boardArray [8] === 'O' ||
            boardArray[0] === 'O' && boardArray[3] === 'O' && boardArray [6] === 'O' ||
            boardArray[1] === 'O' && boardArray[4] === 'O' && boardArray [7] === 'O' ||
            boardArray[2] === 'O' && boardArray[5] === 'O' && boardArray [8] === 'O' ||
            boardArray[0] === 'O' && boardArray[4] === 'O' && boardArray [8] === 'O' ||
            boardArray[2] === 'O' && boardArray[4] === 'O' && boardArray [6] === 'O') 
            {
              $('#message').text('O WINSSSSSSSS!!!!!!!!!!')
              overOrNot = true
              gameOver()
            }
        else if (boardArray[0] === 'X' && boardArray[1] === 'X' && boardArray [2] === 'X' ||
                 boardArray[3] === 'X' && boardArray[4] === 'X' && boardArray [5] === 'X' ||
                 boardArray[6] === 'X' && boardArray[7] === 'X' && boardArray [8] === 'X' ||
                 boardArray[0] === 'X' && boardArray[3] === 'X' && boardArray [6] === 'X' ||
                 boardArray[1] === 'X' && boardArray[4] === 'X' && boardArray [7] === 'X' ||
                 boardArray[2] === 'X' && boardArray[5] === 'X' && boardArray [8] === 'X' ||
                 boardArray[0] === 'X' && boardArray[4] === 'X' && boardArray [8] === 'X' ||
                 boardArray[2] === 'X' && boardArray[4] === 'X' && boardArray [6] === 'X') 
            {
                $('#message').text('X WINSSSSSSSS!!!!!!!!!!')
                overOrNot = true
                gameOver ()
            }
        else {

        }
        } else {
            $('#message').text('DRAW.')
            overOrNot = true
            gameOver ()
        }
}

const onMakeMove = function(event) { 
     //DEACTIVATE CELLS
     $('#' + event.target.id).off()
     
     //UPDATE ARRAYS
     boardArray[event.target.id] = currentPlayer
     totalsBoardArray.push(currentPlayer) 
     
    //UPDATE API
     const data = {
         game: {
            cell: {
        value: currentPlayer,
        index: event.target.id
        },
        over: overOrNot
         }
    }
    api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
    
    //RUN GAME ENGINE
    gameEngine()    
    
    //FILL IN BOARD
    const fillIn = function (event) {
        $('#' + event.target.id).text(currentPlayer)
    }
    fillIn(event)
    
    //SWITCH PLAYERS
    moveMade = true
    const switchPlayers = function () {
    if (currentPlayer === "X" && moveMade === true) {
        currentPlayer = "O"
    } else if (currentPlayer === "O" && moveMade === true) {
        currentPlayer = "X"
    }
       moveMade = false 
    }
    switchPlayers()
}



 module.exports = {
     onStartGame,
     onMakeMove,
     onStartNewGame
 }