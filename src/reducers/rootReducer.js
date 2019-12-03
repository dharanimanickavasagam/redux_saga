import {combineReducers} from "redux";
import {article} from "./article"

 const rootReducer = combineReducers({
    article : article
}); 

export default rootReducer; 