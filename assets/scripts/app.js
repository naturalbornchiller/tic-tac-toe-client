'use strict'

const authEvents = require('./games/auth_events.js')
const gameEvents = require('./games/game_events.js')

$(() => {
//AUTH EVENTS---------------------------------------
$('#sign-up').on('submit', authEvents.onSignUp)
$('#sign-in').on('submit', authEvents.onSignIn)
$('#change-password').on('submit', authEvents.onChangePassword)
$('#sign-out').on('submit', authEvents.onSignOut)
//--------------------------------------------------

//GAME EVENTS----------------------------------------
$('#new-game-button').on('submit', gameEvents.onStartGame) 

$('#0').on('click', () => gameEvents.onMakeMove(event))
$('#1').on('click', () => gameEvents.onMakeMove(event))
$('#2').on('click', () => gameEvents.onMakeMove(event))
$('#3').on('click', () => gameEvents.onMakeMove(event))
$('#4').on('click', () => gameEvents.onMakeMove(event))
$('#5').on('click', () => gameEvents.onMakeMove(event))
$('#6').on('click', () => gameEvents.onMakeMove(event))
$('#7').on('click', () => gameEvents.onMakeMove(event))
$('#8').on('click', () => gameEvents.onMakeMove(event))
//----------------------------------------------------
 
})



  // game actions come from api
  // game states get saved in api
  // each click stores an x or an o in a specific index (depending on the
  // board position of click) within a string array called "cells" which lives within
  // an object for each indidivual game played (each of which has a unique id) 
  // all of which exists within an array called "games" 
  // each individual game also has a boolean entry to express whether it is over or not
 

