import { ApiCreators as actions, ApiTypes as Types } from './index';

describe('redux | api | actions', () => {
  test('should create an action for request', () => {
    const payload = 'songs';
    const expected = {
      type: Types.REQUEST,
      payload,
    };
    expect(actions.request(payload)).toEqual(expected);
  });

  test('should create an action for send data', () => {
    const payload = 'songs';
    const expected = {
      type: Types.DATA,
      payload,
    };
    expect(actions.data(payload)).toEqual(expected);
  });
});
