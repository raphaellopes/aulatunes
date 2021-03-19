import { AlbumsTypes as Types } from '../actions';
import { initialState, albumsReducer } from './index';

describe('redux | albums | reducer', () => {
  test('should return the initial state', () => {
    expect(albumsReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  test('should handle LOADING', () => {
    const payload = true;
    const expected = {
      ...initialState,
      loading: payload,
    };
    const actions = {
      type: Types.STATUS,
      payload,
    };
    expect(albumsReducer(initialState, actions)).toEqual(expected);
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
      ...initialState,
      data: payload,
    };
    const actions = {
      type: Types.DATA,
      payload,
    };
    expect(albumsReducer(initialState, actions)).toEqual(expected);
  });
});
