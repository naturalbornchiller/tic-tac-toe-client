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

//DEFINING GAME ENGINE FOR LATER USE INSIDE ONMAKEMOVE FUNCTION
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
              console.log('O WINS!!!!!!!!!!!!!!!!!')
              overOrNot = true
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
                console.log('X WINS!!!!!!!!!!!!!!!!!!!!!!!!')
                overOrNot = true
            }
        else {

        }
        } else {
            console.log("DRAW!!!!!!!!!!!")
            overOrNot = true
        }
}

const onMakeMove = function(event) { 
     //UPDATE ARRAYS
     boardArray[event.target.id] = currentPlayer
     console.log("boardArray in gameEvents is" + " " + boardArray)
     console.log("Array is" + " " + Array.isArray(boardArray))
     totalsBoardArray.push(currentPlayer) 
     console.log("totalsBoardArray.length in gameEvents is" + " " + totalsBoardArray.length)
     console.log("store.game is" + " "+ store.game.id)
     console.log("store.user.token is" + " "+ store.user.token)
    //UPDATE API
     const data = {
         game: {
            cell: {
         
        //id: store.game.id,
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

// 6 prevent clicked space from being filled again or changed
}



 module.exports = {
     onStartGame,
     onMakeMove
     //currentPlayer
 }