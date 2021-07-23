import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* addEntry(action) {  //Entry POST
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('/api/entries', action.payload, config);

  } catch (error) {
    console.log('Add entry post failed. Error: ', error);
  }
} //End POST
function* getAllEntries(action) {  //Entry GET
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/entries', action.payload, config);
    yield put({ type: 'SET_ENTRIES', payload: response.data });

  } catch (error) {
    console.log('Add entry post failed. Error: ', error);
  }
} //End GET

function* entrySaga() {
  yield takeEvery('ADD_ENTRY', addEntry);
  yield takeEvery('GET_ALL_ENTRIES', getAllEntries);
  // TODO: getPublicEntries
}

export default entrySaga;