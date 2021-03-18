import React, { useEffect, useState } from 'react';
import {
  Header, Container,
} from '../../components';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { useSongsHook } from '../../store/ducks/songs';
import { ControlComponent, ListComponent } from './components';

const Home = () => {
  const [search, setSearch] = useState('');
  const api = useApiHooks();
  const { data: menu, setActive: setMenuActive } = useMenuHook();
  const { data: albums, loading: albumsLoading } = useAlbumsHook();
  const { data: songs, loading: songsLoading } = useSongsHook();

  const loading = albumsLoading || songsLoading;
  const searchFilter = ({ searchKey }) => searchKey.includes(search);
  const cards = () => {
    switch (menu.active) {
      case 'albums':
        return albums.filter(searchFilter);
      case 'songs':
        return songs.filter(searchFilter);
      default:
        return [];
    }
  };

  useEffect(() => {
    const { active } = menu;
    if (active !== 'favorites' && !cards().length) {
      api.request(menu.active);
    }
  }, [menu.active]);

  const handleClickMenuOption = (value) => setMenuActive(value);

  return (
    <>
      <Header />
      <Container>
        <ControlComponent
          menuOptions={menu.options}
          menuOptionActive={menu.active}
          onClickMenuOption={handleClickMenuOption}
          onChangeSearch={setSearch}
        />
        <ListComponent
          loading={loading}
          cards={cards()}
          emptyText={`No results for ${menu.active}`}
        />
      </Container>
    </>
  );
};

export default Home;
