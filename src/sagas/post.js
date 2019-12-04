import { takeEvery, call, put } from "redux-saga/effects";
import { GET_POST, ADD_POST } from "../constants/constants";
import { getPostService } from "../services/postService";

export default function* watcherSaga() {
  yield takeEvery(GET_POST, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getPostService);
    yield put({ type: ADD_POST, payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
