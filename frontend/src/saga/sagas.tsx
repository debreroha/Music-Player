/* eslint-disable @typescript-eslint/no-explicit-any */

import { call, all, put, takeEvery } from "redux-saga/effects";
import {
  getSongsSuccess,
  getSongsFailure,

} from "../songState/songsState";
import axios, { AxiosResponse } from "axios";
import { SongType, SongActionType } from "../songState/songsState";
const baseUrl = "http://localhost:5000/api";

export const getAllSongs = (): Promise<AxiosResponse<SongType[]>> => {
  return axios.get<SongType[]>(`${baseUrl}/songs`);
};

function* getSongs() {
  try {
    const response: AxiosResponse<SongType[]> = yield call(getAllSongs);
    const songs: SongType[] = response.data;
    yield put(getSongsSuccess(songs));
  } catch (e: any) {
    yield put(getSongsFailure(e.message));
  }
}

// watcher saga
export function* watcherSongSaga() {
  yield takeEvery("songs/getSongsFetch", getSongs);
 
}


//root saga
export default function* rootSaga() {
  yield all([watcherSongSaga()]);
}