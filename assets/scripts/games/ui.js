const store = require('../store.js')

const signUpSuccess = function (data) {
    $('#message').text('Welcome!')
    $('#message').addClass('success')  
    $('#sign-up').hide()  
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
    $('#sign-up').hide()  
    $('#sign-in').hide()  
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
    store.game = data.game 
    $('#message').text('Welcome aboard!')  
    console.log('startGameSuccess ran. Data is :', data)
}

const startGameFailure = function(data) {
    $('#message').text('Oops! A game could not start!')
    $('#message').addClass('success') 
    console.log('startGameFailure ran. Data is :', data)
}

const updateGameSuccess = function(data) {
    store.game = data.game   
    console.log('updateGameSuccess ran. Data is :', data)
}


const getGamesSuccess = function (data) {
    store.games = data.games
    let userResults = []
    if (store.games.length > 0) {
        store.games.forEach(function (game) {
            userResults.push(game.cells)
        }
     )}
    

    // const getGames = function () {
    //     for (i = 0; i < store.games.length; i++) {
    //        userResults.push(store.games[i].cells)
    //     }
    // }
    //getGames()
    $('#message').html(`<p style="width:30px">Past games: ${userResults}</p>`)
    console.log('getGamesSuccess ran. Data is :', userResults)
    //pass store.games info: throw data back at user (would be adequate
    // for this assignment), 
    // or run cells
    // for over games back through gameEngine
    // each element of the array that comes back is an object
    //the array itself is called games

}

const getGamesFailure = function () {

}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure,
    updateGameSuccess,
    startGameSuccess,
    startGameFailure,
    getGamesFailure,
    getGamesSuccess
}
