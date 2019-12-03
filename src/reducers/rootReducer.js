import { combineReducers } from "redux";
import { article } from "./article";
import { post } from "./post";

const rootReducer = combineReducers({
  article: article,
  post: post
});

export default rootReducer;
