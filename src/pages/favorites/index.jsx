import React, { useEffect } from 'react';
import { searchFilter } from '../../utils';
import { useGeneralHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { useSongsHook } from '../../store/ducks/songs';
import { useFavoritesHook } from '../../store/ducks/favorites';
import { CardList, Section } from '../../components';

const Favorites = () => {
  const { setActive, filter } = useGeneralHook();
  const { data: albums } = useAlbumsHook();
  const { data: songs } = useSongsHook();
  const favorites = useFavoritesHook();

  const favoritesFilter = (group) => ({ id }) => favorites.data[group].includes(id);
  const favoriteAlbums = albums.filter(favoritesFilter('albums'));
  const favoriteSongs = songs.filter(favoritesFilter('songs'));

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

  const renderSection = (title, data, group) => (
    <Section title={title}>
      <CardList
        loading={false}
        cards={data.filter(searchFilter(filter.search))}
        emptyText={`No results for Favorites ${title}`}
        onClickFavorite={(value) => handleClickFavorite(value, group)}
      />
    </Section>
  );

  return (
    <>
      {renderSection('Albums', favoriteAlbums, 'albums')}
      {renderSection('Songs', favoriteSongs, 'songs')}
    </>
  );
};

export default Favorites;
