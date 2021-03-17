import {
  all, put, takeLatest,
} from 'redux-saga/effects';
import { ApiTypes } from '../../api';
import { AlbumsCreators as actions } from '../actions';

const isSameReducer = (value) => value === 'albums';

export function* albumsFetch({ payload }) {
  if (!isSameReducer(payload)) return;
  yield put(actions.status(true));
}

export function* albumsData({ payload, meta }) {
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

export function* albumsFetchWatcher() {
  yield takeLatest(ApiTypes.REQUEST, albumsFetch);
  yield takeLatest(ApiTypes.DATA, albumsData);
}

export function* albumsSagasWatcher() {
  yield all([albumsFetchWatcher()]);
}
