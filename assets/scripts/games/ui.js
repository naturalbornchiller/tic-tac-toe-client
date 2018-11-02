const store = require('../store.js')

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

const fillIn = function (event) {
    //$('#0').text('x')
    $('#' + event.target.id).text(currentPlayer) // could also pass whether it's x or o using event.target? 
    console.log(event.target.id)
}
//const startGameFailure =

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    fillIn
}
