import {
  all, put, takeLatest,
} from 'redux-saga/effects';
import { ApiTypes } from '../../api';
import { SongsCreators as actions } from '../actions';

const isSameReducer = (value) => value === 'songs';

export function* songsFetch({ payload }) {
  if (!isSameReducer(payload)) return;
  yield put(actions.status(true));
}

export function* songsData({ payload, meta }) {
  if (!isSameReducer(meta)) return;
  yield put(actions.status(false));

  const data = payload.map((item) => ({
    id: item.id.attributes['im:id'],
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    image: item['im:image'][1].label,
  }));

  yield put(actions.data(data));
}

export function* songsFetchWatcher() {
  yield takeLatest(ApiTypes.REQUEST, songsFetch);
  yield takeLatest(ApiTypes.DATA, songsData);
}

export function* songsSagasWatcher() {
  yield all([songsFetchWatcher()]);
}
