/*
Establish API communication using middleware
*/

const BASE_URL = 'http://localhost:5000/v1/'

// Our standard function for calling our api
function callApi(endpoint, authenticated) {
    let token = localStorage.getItem('access_token') || null
    let config = {}

    // If authenticated, include our token in the heaader
    if(authenticated) {
        if(token) {
            config = {
                headers: { 'Authorization': `Bearer $(token)` }
            }
        }
        else {
            throw "No token saved!"
        }
    }

    // Fetch the specific endpoint
    return fetch(BASE_URL + endpoint, config)
        .then(response =>
            response.text().then(text => ({text, response}))
        ).then(({ text, response }) => {
            if (!response.ok) {
                return Promise.reject(text)
            }

            return text
        }).catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {

    const callAPI = action[CALL_API]

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
            return next(action)
    }

    let { endpoint, types, authenticated } = callAPI

    const [ requestType, successType, errorType ] = types

    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
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