// import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  all, call, takeLatest,
} from 'redux-saga/effects';
import api from '../../../../services/itunes';
// import { ApiCreators as actions, ApiTypes as Types } from '../actions';
import { ApiTypes as Types } from '../actions';

export function* apiFetch({ payload }) {
  try {
    const { data } = yield call(api.get, `top${payload}/limit=100/json`);
    console.log('apiFetchSaga >>>', { data });

    // yield put(
    // paginationActions.paginationData(
    // {
    // data: result,
    // page,
    // totalPages: Math.ceil(data.count / perPage),
    // },
    // { reducerKey: meta.reducerKey }
    // )
    // );
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
