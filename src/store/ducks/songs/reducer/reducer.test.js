import { SongsTypes as Types } from '../actions';
import * as reducer from './index';

describe('redux | songs | reducer', () => {
  test('should return the initial state', () => {
    expect(reducer.songsReducer(undefined, {})).toEqual(
      reducer.initialState,
    );
  });

  test('should handle LOADING', () => {
    const payload = true;
    const expected = {
      loading: payload,
    };
    const actions = {
      type: Types.STATUS,
      payload,
    };
    expect(reducer.songsReducer({}, actions)).toEqual(expected);
  });

  test('should handle DATA', () => {
    const payload = [
      {
        id: 'A1',
        name: 'Some Name',
        artist: 'Some Artist',
        image: 'http://some-image',
      },
    ];
    const expected = {
      data: payload,
    };
    const actions = {
      type: Types.DATA,
      payload,
    };
    expect(reducer.songsReducer({}, actions)).toEqual(expected);
  });
});
