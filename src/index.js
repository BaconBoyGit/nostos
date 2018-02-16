import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

// Render our home page
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

