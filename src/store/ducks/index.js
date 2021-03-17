import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { apiSagasWatcher } from './api';
import { generalReducer } from './general';
import { albumsReducer, albumsSagasWatcher } from './albums';

export default combineReducers({
  general: generalReducer,
  albums: albumsReducer,
});

export function* rootSagas() {
  yield all([
    albumsSagasWatcher(),
    apiSagasWatcher(),
  ]);
}
