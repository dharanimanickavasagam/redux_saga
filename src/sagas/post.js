import { takeEvery, call, put, select } from "redux-saga/effects";
import { GET_POST, ADD_POST } from "../constants/constants";
import { getPostService } from "../services/postService";

export default function* watcherSaga() {
  yield takeEvery(GET_POST, workerSaga);
}

function* workerSaga(action) {
  try {
    const thingsFromReduxStore = yield select(state => state.article.articles);

    console.log("redux store's state access :", thingsFromReduxStore);
    console.log("Action can be accessed : ", action.type);
    console.log("Passing a dummy arg from the saga to the service method...");

    const payload = yield call(() => getPostService(action.type));
    yield put({ type: ADD_POST, payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
