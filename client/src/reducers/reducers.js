import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS, PERMIT_REQUEST, PERMIT_SUCCESS, PERMIT_FAILURE
} from '../actions/actions'

// The authentication reducer. The starting state sets authentication
// based on a token being in local storage. 
// We would also want a util to check if the token is expired.

// Since registration and login are handled identically,
// we perform the same state assignements on the appropriate actions

function auth(state = { // This is our "default" state
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false, 
    user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,  // Pull from local storage if we happen to lose our state
    company: localStorage.getItem('company') !== 'undefined' ? JSON.parse(localStorage.getItem('company')) : null
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST || REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        data: action.creds
      })
    case LOGIN_SUCCESS || REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: ''
      })
    case LOGIN_FAILURE || REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}

function perm(state = { // This is our "default" state
    isFetching: false,
    isAuthenticated: true,
    user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,  // Pull from local storage if we happen to lose our state
    company: localStorage.getItem('company') !== 'undefined' ? JSON.parse(localStorage.getItem('company')) : null
  }, action) {
  switch (action.type) {
    case PERMIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        data: action.creds,
      })
    case PERMIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        company: action.company,
        errorMessage: ''
      })
    case PERMIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true
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