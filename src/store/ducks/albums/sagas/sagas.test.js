import { all, put } from 'redux-saga/effects';
import { AlbumsCreators as actions } from '../actions';
import {
  albumsSagasWatcher, albumsFetchWatcher, albumsFetch, albumsData,
} from './index';

describe('redux | albums | sagas', () => {
  test('albumsSagasWatcher()', () => {
    const generator = albumsSagasWatcher();
    const expected = all([albumsFetchWatcher()]);
    expect(generator.next().value).toEqual(expected);
  });

  describe('albumsFetch()', () => {
    test('valid', () => {
      const payload = 'albums';
      const generator = albumsFetch({ payload });
      const expected = put(
        actions.status(true),
      );
      expect(generator.next().value).toEqual(expected);
    });

    test('invalid', () => {
      const payload = 'other';
      const generator = albumsFetch({ payload });
      expect(generator.next().value).toBeUndefined();
    });
  });

  describe('albumsData()', () => {
    test('valid', () => {
      const payload = [
        {
          id: { attributes: { 'im:id': 'A1' } },
          'im:name': { label: 'Some Name' },
          'im:artist': { label: 'Some Artist' },
          'im:image': [
            { label: 'http://some-image-1' },
            { label: 'http://some-image-2' },
          ],
        },
      ];
      const generator = albumsData({ payload, meta: 'albums' });
      generator.next();
      const expected = put(
        actions.data([
          {
            id: 'A1',
            name: 'Some Name',
            artist: 'Some Artist',
            image: 'http://some-image-2',
            searchKey: 'some-name-some-artist',
          },
        ]),
      );
      expect(generator.next().value).toEqual(expected);
    });

    test('invalid', () => {
      const payload = [];
      const meta = 'other';
      const generator = albumsData({ payload, meta });
      expect(generator.next().value).toBeUndefined();
    });
  });
});
