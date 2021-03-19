import { FavoritesTypes as Types } from '../actions';
import { initialState, favoritesReducer } from './index';

describe('redux | favorites | reducer', () => {
  test('should return the initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  test('should add a new favorite', () => {
    const payload = 'A1';
    const meta = 'albums';
    const expected = {
      ...initialState,
      albums: [payload],
    };
    const actions = {
      type: Types.ADD,
      payload,
      meta,
    };
    expect(favoritesReducer(initialState, actions)).toEqual(expected);
  });

  test('should remove a favorite', () => {
    const payload = 'A2';
    const meta = 'albums';
    const state = {
      ...initialState,
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
    expect(favoritesReducer(state, actions)).toEqual(expected);
  });
});
