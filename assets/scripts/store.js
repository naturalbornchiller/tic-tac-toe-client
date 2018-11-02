'use strict'

const store = {
}

//BOARD ARRAY AND GAME ENGINE----------------------------------------
const boardArray = []
const gameEngine = function () {
        if (boardArray[0] && boardArray[1] && boardArray [2] == 'O' ||
            boardArray[3] && boardArray[4] && boardArray [5] == 'O' ||
            boardArray[6] && boardArray[7] && boardArray [8] == 'O' ||
            boardArray[0] && boardArray[3] && boardArray [6] == 'O' ||
            boardArray[1] && boardArray[4] && boardArray [7] == 'O' ||
            boardArray[2] && boardArray[5] && boardArray [8] == 'O' ||
            boardArray[0] && boardArray[4] && boardArray [2] == 'O' ||
            boardArray[2] && boardArray[4] && boardArray [6] == 'O') {
              console.log('O WINS')
            }
        else if (boardArray[0] && boardArray[1] && boardArray [2] == 'X' ||
                 boardArray[3] && boardArray[4] && boardArray [5] == 'X' ||
                 boardArray[6] && boardArray[7] && boardArray [8] == 'X' ||
                 boardArray[0] && boardArray[3] && boardArray [6] == 'X' ||
                 boardArray[1] && boardArray[4] && boardArray [7] == 'X' ||
                 boardArray[2] && boardArray[5] && boardArray [8] == 'X' ||
                 boardArray[0] && boardArray[4] && boardArray [2] == 'X' ||
                 boardArray[2] && boardArray[4] && boardArray [6] == 'X') {
                    console.log('X WINS')
            }
        else if (boardArray.length === 9) { //need something to count actual strings, not just give length
            // could create separate array, just for keeping track of # of moves
            // or number of moves variable, once it hits 9 it's a draw
            console.log('DRAW')
        }
        else {}
      //*it's a draw, and over = true, and message pops up, and counter is updated,
  // // and board reset button pops*/
  // // 
  }

// const player_x = 'X'
// const player_o = 'O'

//PLAYER MANAGEMENT-------------------------------------------
let currentPlayer = 'X'
let moveMade = false

const switchPlayers = function () {
    moveMade = true  
  if (currentPlayer === 'X' && moveMade === true) {
      currentPlayer = 'O'
  } else if (currentPlayer === 'O' && moveMade === true) {
      currentPlayer = 'X'
  }
    moveMade = false
}

module.exports = {
    store,
    boardArray,
    gameEngine,
    currentPlayer,
    switchPlayers
   }
