import React, { useEffect } from 'react';
import { ROUTE_ALBUMS } from '../../shared';
import { searchFilter } from '../../utils';
import { useApiHooks, API_FEAT_ALBUMS } from '../../store/ducks/api';
import { useGeneralHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { useFavoritesHook, FAVORITE_ALBUMS } from '../../store/ducks/favorites';
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
    setActive(ROUTE_ALBUMS);
    if (!albums.length) {
      api.request(API_FEAT_ALBUMS);
    }
  }, []);

  const handleClickFavorite = (value) => {
    if (favorites.data.albums.includes(value)) {
      favorites.remove(value, FAVORITE_ALBUMS);
    } else {
      favorites.add(value, FAVORITE_ALBUMS);
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
