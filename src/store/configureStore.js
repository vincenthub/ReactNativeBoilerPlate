import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import * as storage from "redux-storage";
import logger from "redux-logger";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";

import AppReducers from "../reducers";
import dataSaga from "../saga";

const engine = createEngine("sgcm-mob-app");
const appStorage = storage.reducer(AppReducers);
const middleware = storage.createMiddleware(engine);
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  thunk,
  middleware,
  logger
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(appStorage);
  sagaMiddleware.run(dataSaga);
  return store;
}
