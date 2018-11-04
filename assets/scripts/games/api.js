
const config = require('../config.js')
const store = require('../store.js')
//const authEvent = require('./auth_events.js')
//const gameEvent = require('./game_events.js')

//AUTH API----------------------------------------------------
const signUp = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-up', // create variable so you don't have to type url every time
        method: 'POST',
        data: data 
    })
}

const signIn = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: data 
    })
}

const changePassword = function (data) {
    return $.ajax({
        url: config.apiUrl + '/change-password', 
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data 
    })
}

const signOut = function () {
    return $.ajax({
        url: config.apiUrl + '/sign-out', 
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        } 
    })
}
//GAME API--------------------------------------------
const getStartedGameData = function () {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data: {}
    })
}
const startGame = function () {
    return $.ajax({
        url: config.apiUrl + '/games',
        method: 'POST',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data: {}
    })

}

const updateGame = function (data) {
    return $.ajax({
        url: config.apiUrl + '/games/:' + store.game.id,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token 
        },
        data
    })
}


module.exports = {
    signUp,
    signIn,
    changePassword, 
    signOut,
    startGame,
    getStartedGameData,
    updateGame
}