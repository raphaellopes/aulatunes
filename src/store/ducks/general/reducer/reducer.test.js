import { GeneralTypes as Types } from '../actions';
import { initialState, generalReducer } from './index';

describe('redux | general | reducer', () => {
  test('should return the initial state', () => {
    expect(generalReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  test('should handle SET_ACTIVE_MENU', () => {
    const payload = 'songs';
    const expected = {
      ...initialState,
      menu: {
        ...initialState.menu,
        active: payload,
      },
    };
    const actions = {
      type: Types.SET_ACTIVE_MENU,
      payload,
    };
    expect(generalReducer(initialState, actions)).toEqual(expected);
  });

  test('should handle SET_SEARCH', () => {
    const payload = 'some text';
    const expected = {
      ...initialState,
      filter: {
        ...initialState.filter,
        search: payload,
      },
    };
    const actions = {
      type: Types.SET_SEARCH,
      payload,
    };
    expect(generalReducer(initialState, actions)).toEqual(expected);
  });
});
