import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  INFO_REQUEST, INFO_SUCCESS, INFO_FAILURE
} from '../actions/actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
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

// The info reducer
function info(state = {
  isFetching: false,
  quote: '',
  authenticated: false
}, action) {
switch (action.type) {
  case INFO_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    })
  case INFO_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      name: action.response,
      authenticated: action.authenticated || false
    })
  case INFO_FAILURE:
    return Object.assign({}, state, {
      isFetching: false
    })
  default:
    return state
  }
}

// We combine all the reducers here so that they can 
// be left split apart above
const userInfo = combineReducers({
    auth,
    info
})

export default userInfo