import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./reducers/index";
// import { logger } from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(thunk, logger));
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;