'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  
})

// board is an array with single numbers as coordinates, from 0-8
  // array in JS that captures a given current state of the board
  // function that iterates through array to determine if there are any 3 in a rows
  // simply map out every single possible path to victory in if statements:
  // 0-1-2, 3-4-5, 6-7-8, 0-3-6, 1-4-7, 2-5-8, 0-4-8, 2-4-6
  // e.g., if 0 and 1 and 2 === 'o' then 'o' wins and "over" = true then ___

  // game actions come from api
  // game states get saved in api
  // each click stores an x or an o in a specific index (depending on the
  // board position of click) within a string array called "cells" which lives within
  // an object for each indidivual game played (each of which has a unique id) 
  // all of which exists within an array called "games" 
  // each individual game also has 
