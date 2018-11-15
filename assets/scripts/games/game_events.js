const api = require('./api.js')
const ui = require('./ui.js')
//const store = require('./../store.js')
//const app = require('../app.js')
//const warehouse = require('../warehouse.js')

let currentPlayer = "X"
let moveMade = false
let boardArray = []
let totalsBoardArray = []
let overOrNot = false
let win = false //helps draw function to work

const clickEvents = function () {
    $('#0').on('click', () => onMakeMove(event))
    $('#1').on('click', () => onMakeMove(event))
    $('#2').on('click', () => onMakeMove(event))
    $('#3').on('click', () => onMakeMove(event))
    $('#4').on('click', () => onMakeMove(event))
    $('#5').on('click', () => onMakeMove(event))
    $('#6').on('click', () => onMakeMove(event))
    $('#7').on('click', () => onMakeMove(event))
    $('#8').on('click', () => onMakeMove(event))
    console.log("SOMETHING!!! FUCK!!!")
    currentPlayer = "X"
    moveMade = false
    boardArray = []
    totalsBoardArray = []
    overOrNot = false
    win = false 
    }

//GAME EVENTS---------------------------------------------------
const onStartGame = function (event) {
    event.preventDefault()
    document.getElementById('game-board').hidden = false
    clickEvents()
    api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGamefailure)
}

const onStartNewGame = function (event) {
    event.preventDefault()
    $('td').empty()
    // boardArray = []
    // totalsBoardArray = []
    // currentPlayer = "X"
    //console.log("this is what is in the store:" , store)
    onStartGame(event)
    // clickEvents()
    // api.startGame()
    // .then(ui.startGameSuccess)
    // .catch(ui.startGamefailure)
}

const gameOver = function (){
    document.getElementById('playagainbutton').hidden = false
}

const gameEngine = function () {
      //if (totalsBoardArray.length < 9) {
       
         if (boardArray[0] === 'O' && boardArray[1] === 'O' && boardArray [2] === 'O' ||
            boardArray[3] === 'O' && boardArray[4] === 'O' && boardArray [5] === 'O' ||
            boardArray[6] === 'O' && boardArray[7] === 'O' && boardArray [8] === 'O' ||
            boardArray[0] === 'O' && boardArray[3] === 'O' && boardArray [6] === 'O' ||
            boardArray[1] === 'O' && boardArray[4] === 'O' && boardArray [7] === 'O' ||
            boardArray[2] === 'O' && boardArray[5] === 'O' && boardArray [8] === 'O' ||
            boardArray[0] === 'O' && boardArray[4] === 'O' && boardArray [8] === 'O' ||
            boardArray[2] === 'O' && boardArray[4] === 'O' && boardArray [6] === 'O') 
            {
              $('#message').text('O WINSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
              win = true
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
                $('#message').text('X WINSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!')
                win = true
                overOrNot = true
                gameOver ()
            }
           else if (totalsBoardArray.length === 9 && win === false) {
                $('#message').text('TIE GAME...........................')
                overOrNot = true
                gameOver ()
            }
}

const switchPlayers = function () {
    if (currentPlayer === "X" && moveMade === true) {
        currentPlayer = "O"
    } else if (currentPlayer === "O" && moveMade === true) {
        currentPlayer = "X"
    }
       moveMade = false 
    }

const onMakeMove = function(event) { //this is getting called twice 
    // with each click on the second
    //game which is also why switchPlayers is getting called twice
    // could add if here, could make an alreadyRan variable and set to true
    //or could see if cell has a value and not run if so, return/exit function
    //
     //DEACTIVATE CELLS
     if (moveMade === false) {
     console.log("onMakeMove happened! " + "event.target.id is " + event.target.id)
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
    // const fillIn = function (event) {
        $('#' + event.target.id).text(currentPlayer)
    // }
    // fillIn(event)
    
    //SWITCH PLAYERS
    moveMade = true
    switchPlayers()
    //current -- Emmanuel

    console.log("current player is " + currentPlayer)
    console.log("boardArray is " + boardArray)
    console.log("boardArray.length is " + boardArray.length)
    console.log("totalsBoardArray is " + totalsBoardArray)
    console.log("totalsBoardArray.length is " + totalsBoardArray.length)
    }
    else {
        return 
    }
}

const onGetGames = function(event) {
    event.preventDefault()
    api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

 module.exports = {
     onStartGame,
     onMakeMove,
     onStartNewGame,
     onGetGames,
     clickEvents
 }