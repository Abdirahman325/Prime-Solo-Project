import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// saga for description
function* fetchDescription(action) {
  try {
    console.log("description of book", action.payload);
    console.log(action.payload);
    const description = yield axios.get(`/api/description/${action.payload}`);
    //  sends a call to description reducer
    console.log(description.data);
    yield put({ type: "SET_DESCRIPTION", payload: description.data[0] })
  } catch (err) {
    console.log(err);
    put({ type: "error retrieving description" });
  }
}

function* descriptionSaga() {
  yield takeEvery("FETCH_DESCRIPTION", fetchDescription);
}

export default descriptionSaga;