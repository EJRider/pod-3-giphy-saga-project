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
    let res = yield axios.get(`/getgif/${action.payload}`);
    yield put({
        type: 'SET_GIPHY',
        payload: res.data
    })
}

function* fetchFavorites(){
    yield axios.get('/api/favorite')

    yield put ({
        type: 'SAVE_FAVORITES'
    })
}

const favorites = (state =[], action) => {
    switch (action.type) {
        case 'SAVE_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}

const category = (state, action) => {
    return state =[]

}

const search_results = (state = [], action) => {
    if (action.type === 'SET_GIPHY') {
        return action.payload;
    }
    return state;
};


function* watcherSaga() {
    yield takeEvery('GET_GIPHY', getGiphySearch);
    yield takeEvery('GET_FAVORITES', fetchFavorites);
    yield takeEvery('POST_FAVORITES', postFavorites);
}


function* postFavorites(action){
    console.log('posting favorite', action)
    yield axios.post('/api/favorite', action.payload)
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        search_results,
        favorites,
        category
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
