'use strict'

const authEvents = require('./games/auth_events.js')
const gameEvents = require('./games/game_events.js')
//const store = require('./store.js')


$(() => {
//AUTH EVENTS---------------------------------------
$('#sign-up').on('submit', authEvents.onSignUp)
$('#sign-in').on('submit', authEvents.onSignIn)
$('#change-password').on('submit', authEvents.onChangePassword)
$('#sign-out').on('submit', authEvents.onSignOut)
//--------------------------------------------------
$('#new-game-button').on('submit', gameEvents.onStartGame)
$('#get-games-button').on('submit', gameEvents.onGetGames) 
$('#playagainbutton').on('submit', gameEvents.onStartNewGame) 

//move clickEvents to either store.js or new file (setup.js)
// const clickEvents = function () {
//   $('#0').on('click', () => gameEvents.onMakeMove(event))
//   $('#1').on('click', () => gameEvents.onMakeMove(event))
//   $('#2').on('click', () => gameEvents.onMakeMove(event))
//   $('#3').on('click', () => gameEvents.onMakeMove(event))
//   $('#4').on('click', () => gameEvents.onMakeMove(event))
//   $('#5').on('click', () => gameEvents.onMakeMove(event))
//   $('#6').on('click', () => gameEvents.onMakeMove(event))
//   $('#7').on('click', () => gameEvents.onMakeMove(event))
//   $('#8').on('click', () => gameEvents.onMakeMove(event))
//   }

  // store.clickEvents()
  //gameEvents.clickEvents()
//GAME EVENTS----------------------------------------

// $('#0').on('click', () => gameEvents.onMakeMove(event))
// $('#1').on('click', () => gameEvents.onMakeMove(event))
// $('#2').on('click', () => gameEvents.onMakeMove(event))
// $('#3').on('click', () => gameEvents.onMakeMove(event))
// $('#4').on('click', () => gameEvents.onMakeMove(event))
// $('#5').on('click', () => gameEvents.onMakeMove(event))
// $('#6').on('click', () => gameEvents.onMakeMove(event))
// $('#7').on('click', () => gameEvents.onMakeMove(event))
// $('#8').on('click', () => gameEvents.onMakeMove(event))
//----------------------------------------------------
 
})


module.exports = {
  //clickEvents
  //currentPlayer
}
