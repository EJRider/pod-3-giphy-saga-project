import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga'
import {takeEvery, put} from 'redux-saga/effects'


const search_results = (state=[], action) => {
return state
};

const favorites = (state=[], action) => {
return state
}

const category = (state=[], action) => {
return state
}

function* watcherSaga(){


    yield takeEvery('POST_FAVORITES', postFavorites);

}


function* postFavorites(action){
    console.log('posting favorite', action)
    yield axios.post('/api/favorite', action.payload)
    yield put({
        type: 'GET_FAVORITES'
    })
}


const sagaMiddleware = createSagaMiddleware();

const storeInstace = createStore(
    combineReducers({
        search_results,
        favorites,
        category
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstace}><App /></Provider>, document.getElementById('root'));
