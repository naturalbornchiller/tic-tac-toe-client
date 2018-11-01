'use strict'

const getFormFields = require('../../../lib/get-form-fields.js') 
//getFormFields is part of the browser template
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) { 
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signUp(data) // we put this in before creating it; 
                    // now that we have the data in hand, it will send request and  
                        // allow us to handle the response
        .then(ui.signUpSuccess) //if your request was successful, do whatever is in ()
        // here console.log will just show what we've gotten back
        .catch(ui.signUpFailure) // if your request fails, do this 
        // here console.error so we can see it in red
        //these last two are magical methods that come along with $.ajax
        // this is where we will loop back to the user
}

const onSignIn = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signIn(data) 
    .then(ui.signInSuccess) 
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.changePassword(data) 
    .then(ui.changePasswordSuccess) 
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
    event.preventDefault()
    api.signOut() 
    .then(ui.signOutSuccess) 
    .catch(ui.signOutFailure)
}

const onStartGame = function (event) {
    event.preventDefault()
    api.startGame()
    .then(app.createBoard)
    .catch(ui.startGamefailure)
}

const playGame = function (//click choices?) {

} 

module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut,
    onStartGame,
    move
}
