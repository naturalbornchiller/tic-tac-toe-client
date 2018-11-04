const store = require('../store.js')
//const gameEvents = require('./game_events.js')

const signUpSuccess = function (data) {
    $('#message').text('Welcome!')
    $('#message').addClass('success')    
    console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#message').text('You are in!')
    $('#message').addClass('success')
    $('#game-board').show()    
    console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
    $('#message').text('Password Changed.')
    $('#message').addClass('success')    
    console.log('changePasswordSuccess ran. Data is', data)
}

const changePasswordFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('changePassword ran. Error is :', error)
}

const signOutSuccess = function (data) {
    $('#message').text('See ya!')
    store.user = null
    $('#message').addClass('success')    
    console.log('signOutSuccess ran. Data is', data)
}

const signOutFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('signOutFailure ran. Error is :', error)
}

const startGameSuccess = function(data) {
    store.game = data.game //why is it not storing data?
    $('#message').text('You are in!')
    //$('#message').addClass('success')
   // $('#game-board').show()    
    console.log('startGameSuccess ran. Data is :', data)
}

const startGameFailure = function(data) {
   // store.game = data.game //why is it not storing data?
    $('#message').text('Oops! A game could not start!')
    $('#message').addClass('success')
    //$('#game-board').show()   
    console.log('startGameFailure ran. Data is :', data)
}

// const getStartedGameDataSuccess = function (data){
//     store.game = data.game
//     //$('#message').text('Play well.')
//     //$('#message').addClass('success')
//     //$('#game-board').show()    
//     console.log('getStartedGameDataSuccess ran. Data is :', data)
// }

const updateGameSuccess = function(data) {
    store.game = data.game //why is it not storing data?
    //$('#message').text('You are in!')
    //$('#message').addClass('success')
   // $('#game-board').show()    
    console.log('updateGameSuccess ran. Data is :', data)
}

//const createBoard = $('#game-board').show()
//const startGameFailure =

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure,
   // createBoard,
   // getStartedGameDataSuccess,
    updateGameSuccess,
    startGameSuccess,
    startGameFailure
}
