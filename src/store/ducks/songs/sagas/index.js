import {
  all, put, takeLatest,
} from 'redux-saga/effects';
import { kebabCase } from '../../../../utils';
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

  const data = payload.map((item) => {
    const name = item['im:name'].label;
    const artist = item['im:artist'].label;
    return {
      id: item.id.attributes['im:id'],
      name,
      artist,
      image: item['im:image'][1].label,
      searchKey: kebabCase([name, artist].join(' ')),
    };
  });

  yield put(actions.data(data));
}

export function* songsFetchWatcher() {
  yield takeLatest(ApiTypes.REQUEST, songsFetch);
  yield takeLatest(ApiTypes.DATA, songsData);
}

export function* songsSagasWatcher() {
  yield all([songsFetchWatcher()]);
}
