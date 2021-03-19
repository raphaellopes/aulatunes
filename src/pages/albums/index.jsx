import React, { useEffect } from 'react';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { useFavoritesHook } from '../../store/ducks/favorites';
import { ListComponent } from './components';

const Albums = () => {
  const api = useApiHooks();
  const { setActive } = useMenuHook();
  const { data: albums, loading: albumsLoading } = useAlbumsHook();
  const favorites = useFavoritesHook();

  const loading = albumsLoading;
  const mapFavorite = (item) => ({
    ...item,
    isFavorite: favorites.data.albums.includes(item.id),
  });

  useEffect(() => {
    setActive('albums');
    if (!albums.length) {
      api.request('albums');
    }
  }, []);

  const handleClickFavorite = (value) => {
    if (favorites.data.albums.includes(value)) {
      favorites.remove(value, 'albums');
    } else {
      favorites.add(value, 'albums');
    }
  };

  return (
    <ListComponent
      loading={loading}
      cards={albums.map(mapFavorite)}
      emptyText="No results for Albums"
      onClickFavorite={handleClickFavorite}
    />
  );
};

export default Albums;
