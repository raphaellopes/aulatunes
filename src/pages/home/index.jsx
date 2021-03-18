import React, { useEffect } from 'react';
import {
  Header, Container,
} from '../../components';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { ControlComponent, ListComponent } from './components';

const Home = () => {
  const api = useApiHooks();
  const { data: menu, setActive: setMenuActive } = useMenuHook();
  const { data: albums, loading: albumsLoading } = useAlbumsHook();

  const cards = menu.active === 'albums' ? albums : [];
  const loading = albumsLoading;

  useEffect(() => {
    const { active } = menu;
    if (active !== 'favorites' && !cards.length) {
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
        />
        <ListComponent loading={loading} cards={cards} />
      </Container>
    </>
  );
};

export default Home;
