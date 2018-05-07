import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS, PERMIT_REQUEST, PERMIT_SUCCESS, PERMIT_FAILURE, UPDATE_REQUEST, UPDATE_FAILURE, UPDATE_SUCCESS 
} from '../actions/actions'

// The authentication reducer. The starting state sets authentication
// based on a token being in local storage. 
// We would also want a util to check if the token is expired.

// Since registration and login are handled identically,
// we perform the same state assignements on the appropriate actions

function auth(state = { // This is our "default" state
    isFetching: false,
    logError: false,
    permError: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false, 
    user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,  // Pull from local storage if we happen to lose our state
    permit: localStorage.getItem('company') !== 'undefined' ? JSON.parse(localStorage.getItem('company')) : null
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST || REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        logError: false,
        data: action.creds,
        errorMessage: ''
      })
    case LOGIN_SUCCESS || REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        logError: false,
        user: action.user,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        logError: true,
        errorMessage: action.message
      })
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        logError: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        logError: false,
        isAuthenticated: false
      })
   case UPDATE_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      isAuthenticated: true,
      data: action.creds,
    })
    
    case UPDATE_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated: true,
      errorMessage: action.message
      })

    case UPDATE_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      user: action.user,
      })
    default:
      return state

  }
}

function perm(state = { // This is our "default" state
    isFetching: false,
    isAuthenticated: true,
    permError: false,
    user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,  // Pull from local storage if we happen to lose our state
    permit: localStorage.getItem('company') !== 'undefined' ? JSON.parse(localStorage.getItem('company')) : null
  }, action) {
  switch (action.type) {
    case PERMIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        permError: false,
        data: action.creds,
      })
    case PERMIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        permError: false,
        permit: action.response,
      })
    case PERMIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        permError: true,
        isAuthenticated: true,
        permitErrorMessage: action.message
      })
    default:
      return state
  }
}

// We combine all the reducers here so that they can 
// be left split apart above
const userInfo = combineReducers({
    auth,
    perm
})

export default userInfo