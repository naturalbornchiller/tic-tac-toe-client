const api = require('./api.js')
const ui = require('./ui.js')

const createBoard = function () {$('#game-board').show()
  }

const onStartGame = function (event) {
    event.preventDefault()
    api.startGame()
    .then(createBoard)
    //.catch(ui.startGamefailure)
}



/*const playGame = function (//click choices?) {

}*/ 

module.exports = {
    onStartGame,
   // onMove
}