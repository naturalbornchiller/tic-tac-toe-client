const api = require('./api.js')
const app = require('../app.js')
const ui = require('./ui.js')

// const createBoard = function () {$('#game-board').show()
//   }

const onStartGame = function () {
    event.preventDefault()
    api.startGame()
   // .then(createBoard)
    let currentPlayer = player_x
    //.catch(ui.startGamefailure)
}
//PLAYERS--------------------------------------------------
const player_x = 'X'
const player_o = 'O'
const switchPlayers = function () {
  if (currentplayer === player_x /*&& moveMade === true*/) {
      currentPlayer === player_o
  } else if (currentplayer === player_o /*&& moveMade === true*/) {
      currentPlayer === player_x
  }
const moveMade = false

//MOVES------------------------------------------------------
const onMakeMove = function(event) { 
    console.log(event.target.id)
// 1 moveMade = true
    moveMade = !moveMade //????
    
// 2 switchPlayer
    switchPlayers()
// 3 Communicate with user-------------------
    ui.fillIn(event)

// 4 api.updateGame

// 5 app.gameEngine

// 6 prevent clicked space from being filled again or changed


 module.exports = {
     onStartGame,
     onMakeMove
 }