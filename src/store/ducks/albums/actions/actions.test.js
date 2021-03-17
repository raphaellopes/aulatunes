import { AlbumsCreators as actions, AlbumsTypes as Types } from './index';

describe('redux | albums | actions', () => {
  test('should create an action to change loading status', () => {
    const payload = true;
    const expected = {
      type: Types.STATUS,
      payload,
    };
    expect(actions.status(payload)).toEqual(expected);
  });

  test('should create an action to send data', () => {
    const payload = [
      {
        id: 'A1',
        image: 'http://some-image',
        name: 'Some name',
        artist: 'Some artist',
      }];
    const expected = {
      type: Types.DATA,
      payload,
    };
    expect(actions.data(payload)).toEqual(expected);
  });
});
