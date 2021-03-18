import { kebabCase } from './kababCase';

describe('utils', () => {
  test('should convert a string to kababCase format', () => {
    expect(kebabCase('Some string Value')).toEqual('some-string-value');
  });
});
