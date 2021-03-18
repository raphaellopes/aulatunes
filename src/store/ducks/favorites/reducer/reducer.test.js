import { FavoritesTypes as Types } from '../actions';
import * as reducer from './index';

describe('redux | favorites | reducer', () => {
  test('should return the initial state', () => {
    expect(reducer.favoritesReducer(undefined, {})).toEqual(
      reducer.initialState,
    );
  });

  test('should add a new favorite', () => {
    const payload = 'A1';
    const meta = 'albums';
    const expected = {
      ...reducer.initialState,
      albums: [payload],
    };
    const actions = {
      type: Types.ADD,
      payload,
      meta,
    };
    expect(reducer.favoritesReducer(reducer.initialState, actions)).toEqual(expected);
  });

  test('should remove a favorite', () => {
    const payload = 'A2';
    const meta = 'albums';
    const state = {
      ...reducer.initialState,
      albums: ['A1', 'A2', 'A3'],
    };
    const expected = {
      ...state,
      albums: ['A1', 'A3'],
    };
    const actions = {
      type: Types.REMOVE,
      payload,
      meta,
    };
    expect(reducer.favoritesReducer(state, actions)).toEqual(expected);
  });
});
