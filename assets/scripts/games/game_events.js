const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')


//PLAYERS--------------------------------------------------


//GAME EVENTS---------------------------------------------------
const onStartGame = function (event) {
    event.preventDefault()
    api.startGame()
    .then(/*createBoard*/)
    .catch(ui.startGamefailure)
}

const onMakeMove = function(event) { 
    const targetId = event.target.id
    
    

// 3 Communicate with user-------------------
    ui.fillIn(event)

// 4 api.updateGame
  //  api.updateGame()

// 5 update boardArray
    store.switchPlayers()
    store.boardArray[targetId] = store.currentPlayer 
    store.gameEngine()
    console.log(store.boardArray)
   //????
// 6 prevent clicked space from being filled again or changed
}


 module.exports = {
     onStartGame,
     onMakeMove
 }