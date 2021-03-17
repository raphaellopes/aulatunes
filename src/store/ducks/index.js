import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { apiSagasWatcher } from './api';
import { generalReducer } from './general';

export default combineReducers({
  general: generalReducer,
});

export function* rootSagas() {
  yield all([
    apiSagasWatcher(),
  ]);
}
