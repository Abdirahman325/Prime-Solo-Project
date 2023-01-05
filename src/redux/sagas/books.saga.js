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

}
export default booksSaga;

