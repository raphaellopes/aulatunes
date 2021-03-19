import React, { useEffect } from 'react';
import { useMenuHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { useSongsHook } from '../../store/ducks/songs';
import { useFavoritesHook } from '../../store/ducks/favorites';
import { ListComponent } from './components';

const Favorites = () => {
  const { setActive } = useMenuHook();
  const { data: albums, loading: albumsLoading } = useAlbumsHook();
  const { data: songs, loading: songsLoading } = useSongsHook();
  const favorites = useFavoritesHook();

  const loading = albumsLoading || songsLoading;
  const allFavorites = [...favorites.data.albums, ...favorites.data.songs];
  const favoritesFilter = ({ id }) => allFavorites.includes(id);
  const mapFavorite = (item) => ({
    ...item,
    isFavorite: allFavorites.includes(item.id),
  });

  const cards = [...albums, ...songs].filter(favoritesFilter);

  useEffect(() => {
    setActive('favorites');
  }, []);

  const handleClickFavorite = (value, group) => {
    if (favorites.data[group].includes(value)) {
      favorites.remove(value, group);
    } else {
      favorites.add(value, group);
    }
  };

  return (
    <ListComponent
      loading={loading}
      cards={cards.map(mapFavorite)}
      emptyText="No results for Favorites"
      onClickFavorite={handleClickFavorite}
    />
  );
};

export default Favorites;
