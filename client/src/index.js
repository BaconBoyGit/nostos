import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import userInfo from './reducers/reducers'
import api from './middleware/api'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(userInfo)

let rootElement = document.getElementById('root')


// Render our home page
ReactDOM.render((
    <Provider store = {store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>
), rootElement);

// Register service worker - read documentation for more info
registerServiceWorker();

