import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchStatisticsAsync  } from '../redux/statisticsActions';
import { fetchStatistics } from '../services/api';
import { setStatistics } from '../redux/statisticsSlice';


function* fetchStatisticsSaga() {
  try {
    const statistics = yield call(fetchStatistics);
    yield put(setStatistics(statistics));
  } catch (error) {
    console.error('Failed to fetch statistics:', error);
  }
}

export default function* statisticsSaga() {
  yield takeLatest(fetchStatisticsAsync.type, fetchStatisticsSaga);
}

