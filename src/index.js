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
    return state =[]
};

const favorites = (state =['boobpal;dksdjf', 'teeest'], action) => {
    switch (action.type) {
        case 'SAVE_ELEMENTS':
            return action.payload;
        default:
            return state;
    }
}

const category = (state, action) => {
    return state =[]

}

function* fetchFavorites(){
    yield axios.get('/api/favorite')

    yield put ({
        type: 'SAVE_FAVORITES'
    })

}

function* watcherSaga(){
    yield takeEvery('GET_FAVORITES', fetchFavorites)
}

const sagaMiddleware = createSagaMiddleware();
// createSagaMiddleware(sagaMiddleware);

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
