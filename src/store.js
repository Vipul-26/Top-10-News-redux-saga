/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/index";
// import { logger } from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
// import storage from "redux-persist/lib/storage"; // Local Storage
import storageSession from "redux-persist/lib/storage/session"; // Session Storage
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import createMigrate from "redux-persist/es/createMigrate";
import { createWhitelistFilter } from "redux-persist-transform-filter";
import { createBlacklistFilter } from "redux-persist-transform-filter";

const rootReducer = combineReducers({
  myReducer: reducer,
});

const sagaMiddleware = createSagaMiddleware();

let debug = true;

const migrations = {};

// Blacklist means that all properties except those listed in the blacklist will be saved to the storage.

// Whitelist means that only specific properties or sub-states listed in the whitelist will be saved to the storage.

// Transform allow you to modify the data before it's saved or after it's rehydrated.

// const myTransform = {
//   in: (state) => {
//     // modify the state before saving
//     return state;
//   },
//   out: (state) => {
//     // modify the state after rehydration
//     return state;
//   }
// };

// stateReconciler is an optional function that helps merge the rehydrated state with the initial state of your application

// autoMergeLevel2 is a specific state reconciler function provided by redux-persist that is designed to handle merging of state updates during rehydration.

// const migrations = {
//   0: (state) => {
//     // Migration logic for version 0
//     return { ...state, someNewProperty: 'defaultValue' };
//   },
//   1: (state) => {
//     // Migration logic for version 1
//     return { ...state, anotherNewProperty: 'defaultValue' };
//   },
// };

const persistConfig = {
  key: "root",
  storage: storageSession,
  //   version: 4,
  //   stateReconciler: autoMergeLevel2,
  //   migrate: createMigrate(migrations, ,{ debug }),
  //   blacklist: ['channelName'], // channelName will not be persisted, rest all will be persisted
  //   whitelist: ["channelName"], // only channelName will be persisted, rest all not persisted
  //   transform: [createBlacklistFilter("myReducer", ["loading"]), myTransform], // inside myReducer only loading will not added to sessionStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(reducers, applyMiddleware(thunk, logger));

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
