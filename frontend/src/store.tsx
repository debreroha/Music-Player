/* eslint-disable no-unused-vars */
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songState/songsState";
import rootSaga from "./saga/sagas";
// import { addRootSaga } from "./saga/sagas";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);
// saga.run(addRootSaga);
export default store;
