import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPrompts() {
    try {
        const serverResponse = yield axios.get('/api/prompts'); //sends to server.js
        yield put({ type: "SET_PROMPTS", payload: serverResponse.data });  //sends to reducer
    } catch (error) {
        console.log('error in prompt saga', error);

    }
}

function* promptSaga() {
    yield takeLatest('GET_PROMPTS', getPrompts);
}

export default promptSaga;
