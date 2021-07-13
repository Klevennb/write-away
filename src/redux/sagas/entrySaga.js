/* eslint-disable no-console */
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchEntries() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('api/user', config);
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
function* addEntry(action) {
  try {
    yield axios.post(`api/entries`, action.payload);
  } catch (error) {
  }
}

function* userSaga() {
  yield takeLatest('FETCH_ENTRIES', fetchEntries);
  yield takeLatest('ADD_ENTRY', addEntry);
}

export default userSaga;
