import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Root from './components/Root'
import './index.css';

//import registerServiceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
    <Root store={store} />, document.getElementById('root'));

//registerServiceWorker();
