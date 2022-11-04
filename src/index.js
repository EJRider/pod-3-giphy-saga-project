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
    // get gifs from GIPHY with params. GET doesn't have req.body,
    // so must pass parameter through url
    let res = yield axios.get(`/getgif/${action.payload}`);
    yield put({
        type: 'SET_GIPHY',
        payload: res.data
    })
}


const category = (state = [], action) => {
   switch (action.type) {
        case "SET_CATEGORY":
            return action.payload;
        default:
            return state;
   }
}

function* fetchCategory() {
    // console.log('in fetchCategory');
    let catRes = yield axios.get("/api/category");
    // console.log('GET response', catRes);
    yield put({
        type: "SET_CATEGORY",
        payload: catRes.data
    })
}
function* fetchFavorites(){
    // get favorites from DB
    let response = yield axios.get('/api/favorite');
    yield put ({
        type: 'SAVE_FAVORITES',
        payload: response.data
    })
}

function* putFavorite(action) {
    console.log(action.payload);
    // ... /api/favorite/favId, with category.id to update the table
    yield axios.put(`api/favorite/${action.payload.id}`, action.payload);
    yield put ({
        type: 'GET_FAVORITES'
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

const search_results = (state = [], action) => {
    if (action.type === 'SET_GIPHY') {
        return action.payload;
    }
    return state;
};


function* watcherSaga() {
    // get gifs from GIPHY
    yield takeEvery('GET_GIPHY', getGiphySearch);

    // get favorites from DB
    yield takeEvery('GET_FAVORITES', fetchFavorites);

    // add a new favorite to DB
    yield takeEvery('POST_FAVORITES', postFavorites);

    // get categories from DB
    yield takeEvery("FETCH_CATEGORY", fetchCategory);

    // update favorites category
    yield takeEvery('PUT_FAVORITE', putFavorite);
}


function* postFavorites(action){
    // console.log('posting favorite', action)
    yield axios.post('/api/favorite', action.payload)
    yield put({
        type: 'GET_FAVORITES'
    })
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
