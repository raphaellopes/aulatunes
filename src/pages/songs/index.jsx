import React, { useEffect } from 'react';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { useSongsHook } from '../../store/ducks/songs';
import { useFavoritesHook } from '../../store/ducks/favorites';
import { ListComponent } from './components';

const Songs = () => {
  const api = useApiHooks();
  const { setActive } = useMenuHook();
  const { data: songs, loading: songsLoading } = useSongsHook();
  const favorites = useFavoritesHook();

  const loading = songsLoading;
  // const allFavorites = [...favorites.data.albums, ...favorites.data.songs];
  // const favoritesFilter = ({ id }) => allFavorites.includes(id);
  const mapFavorite = (item) => ({
    ...item,
    isFavorite: favorites.data.songs.includes(item.id),
  });

  useEffect(() => {
    setActive('songs');
    if (!songs.length) {
      api.request('songs');
    }
  }, []);

  const handleClickFavorite = (value) => {
    if (favorites.data.songs.includes(value)) {
      favorites.remove(value, 'songs');
    } else {
      favorites.add(value, 'songs');
    }
  };

  return (
    <ListComponent
      loading={loading}
      cards={songs.map(mapFavorite)}
      emptyText="No results for Songs"
      onClickFavorite={handleClickFavorite}
    />
  );
};

export default Songs;
