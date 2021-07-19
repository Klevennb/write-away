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


function* entrySaga() {
    yield takeEvery('ADD_ENTRY', addEntry);

}

export default entrySaga;