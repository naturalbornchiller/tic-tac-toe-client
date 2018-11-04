const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

//PLAYERS--------------------------------------------------


//GAME EVENTS---------------------------------------------------
const onStartGame = function (event) {
    event.preventDefault()
    document.getElementById('game-board').hidden = false
    api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGamefailure)
}

//console.log("store.currentPlayer in game_events.js before onMakeMove function is" + " " + store.currentPlayer)
//console.log(store.boardArray)
//const playerX = 'X'
//const playerO = 'O'

let currentPlayer = "X"
let moveMade = false
const boardArray = []
const totalsBoardArray = []
let overOrNot = false

const gameEngine = function () {
      if (totalsBoardArray.length < 9) {
        if (boardArray[0] && boardArray[1] && boardArray [2] === 'O' ||
            boardArray[3] && boardArray[4] && boardArray [5] === 'O' ||
            boardArray[6] && boardArray[7] && boardArray [8] === 'O' ||
            boardArray[0] && boardArray[3] && boardArray [6] === 'O' ||
            boardArray[1] && boardArray[4] && boardArray [7] === 'O' ||
            boardArray[2] && boardArray[5] && boardArray [8] === 'O' ||
            boardArray[0] && boardArray[4] && boardArray [8] === 'O' ||
            boardArray[2] && boardArray[4] && boardArray [6] === 'O') 
            {
              console.log('O WINS!!!!!!!!!!!!!!!!!')
              overOrNot = true
            }
        else if (boardArray[0] && boardArray[1] && boardArray [2] === 'X' ||
                 boardArray[3] && boardArray[4] && boardArray [5] === 'X' ||
                 boardArray[6] && boardArray[7] && boardArray [8] === 'X' ||
                 boardArray[0] && boardArray[3] && boardArray [6] === 'X' ||
                 boardArray[1] && boardArray[4] && boardArray [7] === 'X' ||
                 boardArray[2] && boardArray[5] && boardArray [8] === 'X' ||
                 boardArray[0] && boardArray[4] && boardArray [8] === 'X' ||
                 boardArray[2] && boardArray[4] && boardArray [6] === 'X') 
            {
                console.log('X WINS!!!!!!!!!!!!!!!!!!!!!!!!')
                overOrNot = true
            }
        else {
            
        }
        } else {
            console.log("DRAW!!!!!!!!!!!")
        }
}

const onMakeMove = function(event) { 
     //UPDATE ARRAYS
     boardArray[event.target.id] = currentPlayer
     console.log("store.boardArray in gameEvents is" + " " + boardArray)
     totalsBoardArray.push(currentPlayer) 
     console.log("store.totalsBoardArray.length in gameEvents is" + " " + totalsBoardArray.length)
     
    //UPDATE API
     const data = {
        //id: store.games.id,
        value: currentPlayer,
        index: event.target.id
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

// 6 prevent clicked space from being filled again or changed
}



 module.exports = {
     onStartGame,
     onMakeMove
     //currentPlayer
 }