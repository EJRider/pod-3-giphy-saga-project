import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga'
import {takeEvery, put} from 'redux-saga/effects'


// const search_results = (state, action) => {

// };

// const favorites = (state, action) => {

// }

const category = (state = [], action) => {
   switch (action.type) {
        case "SET_CATEGORY":
            return action.payload;
        default:
            return state;
   }
}

function* watcherSaga(){
    yield takeEvery("FETCH_CATEGORY", fetchCategory)
}

function* fetchCategory() {
    console.log('in fetchCategory');

    let catRes = yield axios.get("/api/category");
    console.log('GET response', catRes);

    yield put({
        type: "SET_CATEGORY",
        payload: catRes.data
    })
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    // combineReducers({
    //     search_results,
    //     favorites,
        category,
    // }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
