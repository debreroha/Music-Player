import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import songsReducer from './songsSlice';
import statisticsReducer from './statisticsSlice';
import rootSaga from '../sagas';
import { fetchStatisticsAsync } from './statisticsActions';

const rootReducer = combineReducers({
  songs: songsReducer,
  statistics: statisticsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

store.dispatch(fetchStatisticsAsync());

export default store;