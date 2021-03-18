import { FavoritesCreators as actions, FavoritesTypes as Types } from './index';

describe('redux | favorites | actions', () => {
  test('should create an action to add a favorite', () => {
    const payload = 'A1';
    const meta = 'albums';
    const expected = {
      type: Types.ADD,
      payload,
      meta,
    };
    expect(actions.add(payload, meta)).toEqual(expected);
  });

  test('should create an action to remove a favorite', () => {
    const payload = 'A1';
    const meta = 'albums';
    const expected = {
      type: Types.REMOVE,
      payload,
      meta,
    };
    expect(actions.remove(payload, meta)).toEqual(expected);
  });
});
