import React, { useEffect } from 'react';
import { searchFilter } from '../../utils';
import { useApiHooks } from '../../store/ducks/api';
import { useGeneralHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { useFavoritesHook } from '../../store/ducks/favorites';
import { CardList } from '../../components';

const Albums = () => {
  const api = useApiHooks();
  const { setActive, filter } = useGeneralHook();
  const { data: albums, loading } = useAlbumsHook();
  const favorites = useFavoritesHook();

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
    <CardList
      loading={loading}
      cards={albums.filter(searchFilter(filter.search)).map(mapFavorite)}
      emptyText="No results for Albums"
      onClickFavorite={handleClickFavorite}
    />
  );
};

export default Albums;
