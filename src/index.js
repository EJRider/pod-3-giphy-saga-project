import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga'
import {takeEvery, put} from 'redux-saga/effects'


const search_results = (state, action) => {

};

const favorites = (state, action) => {

}

const category = (state, action) => {

}

function* watcherSaga(){

}

createSagaMiddleware(sagaMiddleware);

const storeInstace = createStore(
    combineReducers({
        search_results,
        favorites,
        category
    },
    applyMiddleware(sagaMiddleware, logger))
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstace}><App /></Provider>, document.getElementById('root'));
