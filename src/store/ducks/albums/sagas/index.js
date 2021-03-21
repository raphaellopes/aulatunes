import {
  all, put, takeLatest,
} from 'redux-saga/effects';
import { kebabCase } from '../../../../utils';
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

  const data = payload.map((item) => {
    const name = item['im:name'].label;
    const artist = item['im:artist'].label;
    return {
      id: item.id.attributes['im:id'],
      name,
      artist,
      image: item['im:image'][1].label,
      searchKey: kebabCase([name, artist].join(' ')),
      price: item['im:price'].label,
      category: item.category.attributes.label,
    };
  });

  yield put(actions.data(data));
}

export function* albumsFetchWatcher() {
  yield takeLatest(ApiTypes.REQUEST, albumsFetch);
  yield takeLatest(ApiTypes.DATA, albumsData);
}

export function* albumsSagasWatcher() {
  yield all([albumsFetchWatcher()]);
}
