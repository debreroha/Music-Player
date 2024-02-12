/* eslint-disable no-unused-vars */
import createSagaMiddleWare from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songState/songsState";
import songSaga from "./saga/sagas";

const saga = createSagaMiddleWare();
const strore = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(songSaga);
export default strore;