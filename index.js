import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './actions'
import './containers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import {createStore, compose} from 'redux' 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(rootReducer, composeEnhancers())

const app = (
    <Provider store={store}>
    <App />
    </Provider>
)

const app1 = (
    <Provider store={nw_store}>
    <App />
    </Provider>
    //return from here
)

ReactDOM.render(app, document.getElementById('root'));
 
serviceWorker.unregister();
