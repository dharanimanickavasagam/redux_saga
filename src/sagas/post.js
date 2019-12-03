import { takeEvery, call, put } from "redux-saga/effects";
import { GET_POST } from "../constants/constants";
import axios from "axios";

export default function* watcherSaga() {
  yield takeEvery(GET_POST, workerSaga);
}

const getData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

function* workerSaga() {
  try {
    const payload = yield call(getData);
    console.log(payload);
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
