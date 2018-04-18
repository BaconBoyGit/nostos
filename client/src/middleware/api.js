/*
  This middleware handles requests to external endpoints

  Created by Bradley Boutcher, 2018
*/

import {react} from 'react'

// Change this depending on the location your server is running
const BASE_URL = 'http://localhost:5000/v1/'

function callApi(endpoint, authenticated) {

    // Retreive our token to determine if it exists
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
    
    // Fetch and return reponse data
    return fetch(BASE_URL + endpoint, config)
      .then(response =>
        response.json().then(text => ({ text, response }))
      ).then(({ text, response }) => {
        if (!response.ok) {
          return Promise.reject(text)
        }
        
        return text
      }).catch(err => console.log(err))
  }
  
  export const CALL_API = Symbol('Call_API')
  
  // We bind the function to our store and actions
  export default store => next => action => {
  
    const callAPI = action[CALL_API]
  
    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
      return next(action)
    }
  
    let { endpoint, types, authenticated } = callAPI
  
    const [ requestType, successType, errorType ] = types
  
    return callApi(endpoint, authenticated).then(
      response =>
        next({
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