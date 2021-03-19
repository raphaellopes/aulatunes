import { GeneralCreators as actions, GeneralTypes as Types } from './index';

describe('redux | general | actions', () => {
  test('should create an action for setActiveMenu', () => {
    const payload = 'songs';
    const expected = {
      type: Types.SET_ACTIVE_MENU,
      payload,
    };
    expect(actions.setActiveMenu(payload)).toEqual(expected);
  });

  test('should create an action for setSearch', () => {
    const payload = 'some text';
    const expected = {
      type: Types.SET_SEARCH,
      payload,
    };
    expect(actions.setSearch(payload)).toEqual(expected);
  });
});
