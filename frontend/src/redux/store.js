import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import songsReducer from './songsSlice.js';
import statisticsReducer from './statisticsSlice.js';
import rootSaga from '../sagas';
import { fetchStatisticsAsync } from './statisticsActions.js';

const rootReducer = combineReducers({
  songs: songsReducer,
  statistics: statisticsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

store.dispatch(fetchStatisticsAsync());

export default store;
