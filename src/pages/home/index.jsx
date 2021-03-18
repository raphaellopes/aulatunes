import React, { useEffect, useState } from 'react';
import {
  Header, Container,
} from '../../components';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { useSongsHook } from '../../store/ducks/songs';
import { useFavoritesHook } from '../../store/ducks/favorites';
import { ControlComponent, ListComponent } from './components';

const Home = () => {
  const [search, setSearch] = useState('');
  const api = useApiHooks();
  const { data: menu, setActive: setMenuActive } = useMenuHook();
  const { data: albums, loading: albumsLoading } = useAlbumsHook();
  const { data: songs, loading: songsLoading } = useSongsHook();
  const favorites = useFavoritesHook();

  const loading = albumsLoading || songsLoading;
  const searchFilter = ({ searchKey }) => searchKey.includes(search);
  const allFavorites = [...favorites.data.albums, ...favorites.data.songs];
  const favoritesFilter = ({ id }) => allFavorites.includes(id);
  const mapFavorite = (item) => ({
    ...item,
    isFavorite: allFavorites.includes(item.id),
  });

  const cards = () => {
    switch (menu.active) {
      case 'albums':
        return albums;
      case 'songs':
        return songs;
      case 'favorites':
        return [...albums, ...songs].filter(favoritesFilter);
      default:
        return [];
    }
  };

  useEffect(() => {
    const { active } = menu;
    if (active !== 'favorites' && (!albums.length || !songs.length)) {
      api.request(menu.active);
    }
  }, [menu.active]);

  const handleClickFavorite = (value, group) => {
    if (favorites.data[group].includes(value)) {
      favorites.remove(value, group);
    } else {
      favorites.add(value, group);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ControlComponent
          menuOptions={menu.options}
          menuOptionActive={menu.active}
          onClickMenuOption={setMenuActive}
          onChangeSearch={setSearch}
        />
        <ListComponent
          loading={loading}
          cards={cards().map(mapFavorite).filter(searchFilter)}
          emptyText={`No results for ${menu.active}`}
          onClickFavorite={handleClickFavorite}
        />
      </Container>
    </>
  );
};

export default Home;
