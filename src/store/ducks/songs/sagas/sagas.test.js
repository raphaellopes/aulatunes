import { all, put } from 'redux-saga/effects';
import { SongsCreators as actions } from '../actions';
import {
  songsSagasWatcher, songsFetchWatcher, songsFetch, songsData,
} from './index';

describe('redux | songs | sagas', () => {
  test('songsSagasWatcher()', () => {
    const generator = songsSagasWatcher();
    const expected = all([songsFetchWatcher()]);
    expect(generator.next().value).toEqual(expected);
  });

  describe('songsFetch()', () => {
    test('valid', () => {
      const payload = 'songs';
      const generator = songsFetch({ payload });
      const expected = put(
        actions.status(true),
      );
      expect(generator.next().value).toEqual(expected);
    });

    test('invalid', () => {
      const payload = 'other';
      const generator = songsFetch({ payload });
      expect(generator.next().value).toBeUndefined();
    });
  });

  describe('songsData()', () => {
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
      const generator = songsData({ payload, meta: 'songs' });
      generator.next();
      const expected = put(
        actions.data([
          {
            id: 'A1',
            name: 'Some Name',
            artist: 'Some Artist',
            image: 'http://some-image-2',
          },
        ]),
      );
      expect(generator.next().value).toEqual(expected);
    });

    test('invalid', () => {
      const payload = [];
      const meta = 'other';
      const generator = songsData({ payload, meta });
      expect(generator.next().value).toBeUndefined();
    });
  });
});
