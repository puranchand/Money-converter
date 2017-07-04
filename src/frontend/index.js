import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/main';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import {combineReducers, createStore,applyMiddleware} from 'redux'
import allReducers from './reducers';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
) 

ReactDOM.render(
	
    <Provider store = {store}>
  		<Main />
    </Provider>,
	document.getElementById('app')
);
