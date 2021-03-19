import { kebabCase, searchFilter } from './index';

describe('utils', () => {
  test('should convert a string to kababCase format', () => {
    expect(kebabCase('Some string Value')).toEqual('some-string-value');
  });

  test('should filter a text based on keySearchProp', () => {
    const actual = [
      { text: 'Some Text', searchKey: 'some-text' },
      { text: 'Other Text', searchKey: 'other-text' },
    ];
    expect(actual.filter(searchFilter('some'))).toEqual([actual[0]]);
  });
});
