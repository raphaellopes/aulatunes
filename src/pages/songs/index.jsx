import React, { useEffect } from 'react';
import { searchFilter } from '../../utils';
import { useApiHooks } from '../../store/ducks/api';
import { useGeneralHook } from '../../store/ducks/general';
import { useSongsHook } from '../../store/ducks/songs';
import { useFavoritesHook } from '../../store/ducks/favorites';
import { CardList } from '../../components';

const Songs = () => {
  const api = useApiHooks();
  const { setActive, filter } = useGeneralHook();
  const { data: songs, loading } = useSongsHook();
  const favorites = useFavoritesHook();

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
    <CardList
      loading={loading}
      cards={songs.filter(searchFilter(filter.search)).map(mapFavorite)}
      emptyText="No results for Songs"
      onClickFavorite={handleClickFavorite}
    />
  );
};

export default Songs;
