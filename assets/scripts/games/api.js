
const config = require('../config.js')
const store = require('../store.js')
const authEvent = require('./auth_events.js')
const gameEvent = require('./game_events.js')

const signUp = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-up', // create variable so you don't have to type url every time
        method: 'POST',
        data: data //BUT JS can just take data as a key with no value 
                // since we named it data (if you use a kay and value of the same name, 
                // it only needs one word, not two)
        //this whole thing (this $.ajax()) is an asynchronous request; the program 
        // can keep working while
        // this request is out; it doesn't have to wait for the response; it's like
        // a little side process so you can multi-task
        // code will run line by line unless you tell it not to

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

    })
}

// const updateGame = function () {
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