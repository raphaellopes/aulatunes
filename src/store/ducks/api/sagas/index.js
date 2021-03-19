import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import api from '../../../../services/itunes';
import { API_TOP_100 } from '../constants';
import { ApiCreators as actions, ApiTypes as Types } from '../actions';

export function* apiFetch({ payload }) {
  try {
    const { data } = yield call(api.get, API_TOP_100[payload]);

    yield put(
      actions.data(
        data.feed.entry,
        payload,
      ),
    );
  } catch (error) {
    console.error('>>> apiFetch', { error });
  }
}

export function* apiFetchWatcher() {
  yield takeLatest(Types.REQUEST, apiFetch);
}

export function* apiSagasWatcher() {
  yield all([apiFetchWatcher()]);
}
