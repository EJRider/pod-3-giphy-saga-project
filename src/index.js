import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'

function* getGiphySearch(action) {
    console.log('in GiphySearch', action.payload);
    let res = yield axios.get(`/getgif/${action.payload}`);

    console.log(res);

    yield put({
        type: 'SET_GIPHY',
        payload: res.data
    })
}

const search_results = (state = [], action) => {
    if (action.type === 'SET_GIPHY') {
        return action.payload;
    }
    return state;
};

const favorites = (state = [], action) => {
    return state;
}

const category = (state = [], action) => {
    return state;
}

function* watcherSaga() {
    yield takeEvery('GET_GIPHY', getGiphySearch)
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
