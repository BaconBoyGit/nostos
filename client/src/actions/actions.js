/*

The Actions file, using React Redux practices to handle changing states

The actions that we need in our case are all going to be asynchronous 
because we are calling an API. To handle the async calls, 
we need a setup that has actions which cover the three possible states that exist:
A request was sent
A request successful
A request failed

Created by Bradley Boutcher, 2018
*/

import { CALL_API } from '../middleware/api'

// Our development route (running on localhost) and our production route
// Comment out one route to use the other 

const prodRoute = "http://btboutcher.com:5000"
// const prodRoute = "http://localhost:5000"

// There are three possible states for our login
// process, and we need actions for each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// Calls the API to get a token and
// dispaches actions along the way

export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${creds.username}&password=${creds.password}`
  }
  
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
  
    return fetch(prodRoute + '/v1/users/login', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok || user.success === false) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.error))

          return Promise.reject(user)
        } else {

          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.token)
          localStorage.setItem('access_token', user.token)
          localStorage.setItem('user', JSON.stringify(user.user))

          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

// Registration actions 
// There are three possible states for our registration
// process, and we need actions for each of them
// The data returned is identical to login, so we can follow a similar process

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

function requestRegister(creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function registerError(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// To register a user, we can use the same POST method as logging in
export function registerUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: ("first="+creds.first+"&last="+creds.last+"&title="+creds.title+
    "&Company="+creds.company+"&phone="+creds.phone+"&email="+creds.email+"&address1="+creds.address1+
    "&address2="+creds.address2+"&password="+creds.password+"&confirm="+creds.confirm+"&city="+creds.city+
    "&state="+creds.state+"&zip="+creds.zip).replace(" ", "%20")
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestRegister(creds))
    console.log(config)
    return fetch(prodRoute + '/v1/users/', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok || user.success === false) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.error))

          return Promise.reject(user)
        } else {

          // If login was successful, set the token and user data in local storage
          localStorage.setItem('id_token', user.token)
          localStorage.setItem('access_token', user.token)
          localStorage.setItem('user', JSON.stringify(user.user))
 
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    dispatch(receiveLogout())
  }
}

// we need to include some more actions to call the API for the user info.
export const INFO_REQUEST = 'INFO_REQUEST'
export const INFO_SUCCESS = 'INFO_SUCCESS'
export const INFO_FAILURE = 'INFO_FAILURE'

// Uses the api middleware to get the user's info
export function fetchUser() {
  return {
    [CALL_API]: {
      endpoint: 'users',
      authenticated: true, // Protected call
      types: [INFO_REQUEST, INFO_SUCCESS, INFO_FAILURE]
    }
  }
}



