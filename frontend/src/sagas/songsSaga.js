import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchSongsAsync } from '../redux/songsSlice';
import { fetchSongs } from '../services/api';

function* fetchSongsSaga() {
  try {
    const songs = yield call(fetchSongs);
    yield put(fetchSongsAsync(songs));
  } catch (error) {
    console.error('Failed to fetch songs:', error);
  }
}

export default function* songsSaga() {
  yield takeLatest(fetchSongsAsync.type, fetchSongsSaga);
}
