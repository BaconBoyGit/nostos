/*
Establish API communication using middleware
*/

import {react} from 'react'

const BASE_URL = 'http://localhost:5000/v1/'

// This is a basic function which makes calls to the specified endpoint 
function callApi(endpoint, authenticated) {

    let token = localStorage.getItem('access_token') || null
    let config = {}
  
    if(authenticated) {
      if(token) {
        config = {
          headers: { 'Authorization': `${token}` }
        }
      }
      else {
        throw "No token saved!"
      }
    }
  
    return fetch(BASE_URL + endpoint, config)
      .then(response =>
        response.json().then(text => ({ text, response }))
      ).then(({ text, response }) => {
        if (!response.ok) {
          return Promise.reject(text)
          localStorage.setItem(endpoint, JSON.stringify(response))
        }
  
        return text
      }).catch(err => console.log(err))
  }
  
  export const CALL_API = Symbol('Call_API')
  
  export default store => next => action => {
  
    const callAPI = action[CALL_API]
  
    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
      return next(action)
    }
  
    let { endpoint, types, authenticated } = callAPI
  
    const [ requestType, successType, errorType ] = types
  
    // Passing the authenticated boolean back in our data will 
    // let us distinguish between normal and secret info
    return callApi(endpoint, authenticated).then(
      response =>
        next(
          {
          response,
          authenticated,
          type: successType
        }),
      error => next({
        error: error.message || 'There was an error.',
        type: errorType
      })
    )
  }