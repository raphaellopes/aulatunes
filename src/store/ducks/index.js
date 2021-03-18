import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { apiSagasWatcher } from './api';
import { generalReducer } from './general';
import { albumsReducer, albumsSagasWatcher } from './albums';
import { songsReducer, songsSagasWatcher } from './songs';
import { favoritesReducer } from './favorites';

export default combineReducers({
  general: generalReducer,
  albums: albumsReducer,
  songs: songsReducer,
  favorites: favoritesReducer,
});

export function* rootSagas() {
  yield all([
    albumsSagasWatcher(),
    apiSagasWatcher(),
    songsSagasWatcher(),
  ]);
}
