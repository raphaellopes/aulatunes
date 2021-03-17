import { GeneralCreators as actions, GeneralTypes as Types } from '../actions';
import * as reducer from './index';

describe('redux | general | reducer', () => {
  test('should return the initial state', () => {
    expect(reducer.generalReducer(undefined, {})).toEqual(
      reducer.initialState,
    );
  });

  test('should handle SET_ACTIVE_MENU', () => {
    const payload = 'songs';
    const expected = {
      menu: {
        active: payload,
      },
    };
    const actions = {
      type: Types.SET_ACTIVE_MENU,
      payload,
    };
    expect(reducer.generalReducer({}, actions)).toEqual(expected);
  });
});
