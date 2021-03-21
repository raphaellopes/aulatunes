import { kebabCase, searchFilter, chunk } from './index';

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

  test('should chunk an array by a specific value', () => {
    const actual = [1, 2, 3, 4, 5];
    const expected = [[1, 2], [3, 4], [5]];
    expect(chunk(actual, 2)).toEqual(expected);
  });
});
