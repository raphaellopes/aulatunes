import React, { useEffect } from 'react';
import { ROUTE_SONGS } from '../../shared';
import { searchFilter } from '../../utils';
import { useApiHooks, API_FEAT_SONGS } from '../../store/ducks/api';
import { useGeneralHook } from '../../store/ducks/general';
import { useSongsHook } from '../../store/ducks/songs';
import { useFavoritesHook, FAVORITE_SONGS } from '../../store/ducks/favorites';
import { CardList } from '../../components';

const Songs = () => {
  const api = useApiHooks();
  const { setActive, filter } = useGeneralHook();
  const { data: songs, loading } = useSongsHook();
  const favorites = useFavoritesHook();

  const mapFavorite = (item) => ({
    ...item,
    isFavorite: favorites.data.songs.includes(item.id),
  });

  useEffect(() => {
    setActive(ROUTE_SONGS);
    if (!songs.length) {
      api.request(API_FEAT_SONGS);
    }
  }, []);

  const handleClickFavorite = (value) => {
    if (favorites.data.songs.includes(value)) {
      favorites.remove(value, FAVORITE_SONGS);
    } else {
      favorites.add(value, FAVORITE_SONGS);
    }
  };

  return (
    <CardList
      loading={loading}
      cards={songs.filter(searchFilter(filter.search)).map(mapFavorite)}
      emptyText="No results for Songs"
      onClickFavorite={handleClickFavorite}
    />
  );
};

export default Songs;
