'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
//const events = require('./books/events')

// use require without a reference to ensure a file is bundled
// require('./example')

//order of page: 
//1 sign up or sign in: HTML -> API -> jQuery -> DOM
//2 game-board: DOM
//3 first click on board puts X on square clicked: DOM -> API ->
//4 second click puts O on square clicked and so on until
//5 win, lose, or draw
//6 result message given to user
//7 counter and API updated
//8 reset button

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
$('#new-game').on('submit', gameEvents.onStartGame) 

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



 




//GAME BOARD----------------------------------------------

// board is an array with single numbers as coordinates, from 0-8
  // array in JS that captures a given current state of the board
  // function that iterates through array to determine if there are any 3 in a rows
  // simply map out every single possible path to victory in if statements:
  // 0-1-2, 3-4-5, 6-7-8, 0-3-6, 1-4-7, 2-5-8, 0-4-8, 2-4-6
  // e.g., if 0 and 1 and 2 === 'o' then 'o' wins and "over" = true 
  // UNTIL array.length = 9, then draw

  // /*const boardArray = [/*string array from API server, x or o clicks pushed in*/]
  // const gameEngine = function () {
  // for (let i = 0; i < 9; i++) {
  // if (boardArray(0) && boardArray(1) && boardArray (2) == 'o' ||
  //     boardArray(3) && boardArray(4) && boardArray (5) == 'o' ||
  //     boardArray(6) && boardArray(7) && boardArray (8) == 'o' ||
  //     boardArray(0) && boardArray(3) && boardArray (6) == 'o' ||
  //     boardArray(1) && boardArray(4) && boardArray (7) == 'o' ||
  //     boardArray(2) && boardArray(5) && boardArray (8) == 'o' ||
  //     boardArray(0) && boardArray(4) && boardArray (2) == 'o' ||
  //     boardArray(2) && boardArray(4) && boardArray (6) == 'o')
  //     {/* o wins and over = true and message pops up and counter is updated and 
  //     board reset button pops*/}
  // else if (boardArray(0) && boardArray(1) && boardArray (2) == 'x' ||
  //     boardArray(3) && boardArray(4) && boardArray (5) == 'x' ||
  //     boardArray(6) && boardArray(7) && boardArray (8) == 'x' ||
  //     boardArray(0) && boardArray(3) && boardArray (6) == 'x' ||
  //     boardArray(1) && boardArray(4) && boardArray (7) == 'x' ||
  //     boardArray(2) && boardArray(5) && boardArray (8) == 'x' ||
  //     boardArray(0) && boardArray(4) && boardArray (2) == 'x' ||
  //     boardArray(2) && boardArray(4) && boardArray (6) == 'x')
  //     {/* x wins, and over = true, and message pops up, and counter is updated, and 
  //     board reset button pops*/}
  // else {switch player } 
  /*it's a draw, and over = true, and message pops up, and counter is updated,
  // and board reset button pops*/
  // } 

//CURRENT PLAYER -------------------------------------------------------------

//player_x



  // game actions come from api
  // game states get saved in api
  // each click stores an x or an o in a specific index (depending on the
  // board position of click) within a string array called "cells" which lives within
  // an object for each indidivual game played (each of which has a unique id) 
  // all of which exists within an array called "games" 
  // each individual game also has a boolean entry to express whether it is over or not
  // if it's over, restart button should become available at that point
