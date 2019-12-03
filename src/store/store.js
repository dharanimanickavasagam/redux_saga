
import {
    createStore,
    compose,
    applyMiddleware
  } from "redux";
  import createSagaMiddleware from 'redux-saga';
  import rootReducer from "../reducers/rootReducer";

  
  // store always accepts root reducer
  const sagaMiddleware = createSagaMiddleware();
  const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(sagaMiddleware))
  );
  
  export default store;