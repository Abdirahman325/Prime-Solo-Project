import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchBooks(action) {
  try {
    let res = yield axios.get("/api/books/");
    console.log("response", res.data);
    yield put({
      type: "SET_DATABOOKS",
      payload: res.data,
    });
  } catch (err) {
    console.error(" failed", err);
  }
}
function* fetchConcluded(action) {
    try {
      const response = yield axios({
        method: "PUT",
        url: `/api/books/${action.payload}`,
      });
      console.log("GET all books that have been completed:", action.payload);
      yield put({ type: "FETCH_DATABASE" });
    } catch {
      console.log("ERROR: IN COMPLETING BOOKS");
    }
  }

function* fetchApi (action){
     yield axios({
        method: "POST", 
        url: "api/books", 
        data: action.payload
     });
}
function* booksSaga(){
    yield takeEvery("FETCH_DATABASE",fetchBooks);
    yield takeEvery("FETCH_BOOKS", fetchApi);
    yield takeEvery("FETCH_ALL_COMPLETE", fetchConcluded);

}
export default booksSaga;

