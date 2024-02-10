import { all } from 'redux-saga/effects';
import songsSaga from './songsSaga';
import statisticsSaga from './statisticsSaga';

export default function* rootSaga() {
  yield all([
    // other sagas
    songsSaga(),
    statisticsSaga(),
  ]);
}
