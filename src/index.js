import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Importation for Redux
import pouceReducer from './reducers/likeReducer'
import coeurReducer from './reducers/coeurReducer'
import alertReducer from './reducers/alertReducer'


// import deuxiemeReducer from './my2eReducer'
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const myStore = createStore(combineReducers({pouceReducer, coeurReducer, alertReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ())


ReactDOM.render(

  <Provider store={myStore}>

    <App/>

  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
