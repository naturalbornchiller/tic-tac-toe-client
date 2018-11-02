
const config = require('../config.js')
const store = require('../store.js')
const authEvent = require('./auth_events.js')
const gameEvent = require('./game_events.js')

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

// const updateGame = function (data) {
//     return $.ajax({
//         url: config.apiUrl + '/games',
//         method: 'PATCH',
//         headers: {
//             Authorization: 'Token token=' + store.user.token 
//         },
//         data: //data from both boardArray, gameEngine... server wants:
//         //{
//                 //   "game": {
//                 //     "cell": {
//                 //       "index": 0,
//                 //       "value": "x"
//                 //     },
//                 //     "over": false
//                 //   }
//                 // }

//     })
// }

// const makeMove = function (move) {
//     return $.ajax({
//         url: config.apiUrl + '/games',
//         method: 'PATCH',
//         headers: {
//             Authorization: 'Token token=' + store.user.token 
//         },
//         data: move /*{ //server ONLY wants to know index and value
//             "game": { //include this in an object that looks like this one
//               "cell": { // so game[cell][index]
//                 "index": 0,
//                 "value": "x"
//               },
//               "over": false
//             }
//           }*/

//     })
//}
module.exports = {
    signUp,
    signIn,
    changePassword, 
    signOut,
    startGame
}