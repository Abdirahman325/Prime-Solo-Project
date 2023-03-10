import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// saga for search
function* fetchSearch(action) {
  try {
    console.log("searching books", action.payload);
    let res = yield axios.get(`/api/:search/${action.payload}`);
    yield put({ type: "SET_SEARCH", payload: res.data });
  } catch (err) {
    console.log("error", err);
    return;
  }
}

function* searchSaga() {
  yield takeEvery("FETCH_SEARCH", fetchSearch);
}

export default searchSaga;