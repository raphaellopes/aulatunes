import React, { useEffect } from 'react';
import {
  Header, Container,
} from '../../components';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { ControlContainer, ListContainer } from './containers';

const Home = () => {
  const api = useApiHooks();
  const { data: menu } = useMenuHook();
  const { data: albums } = useAlbumsHook();

  const cards = menu.active === 'albums' ? albums : [];

  useEffect(() => {
    const { active } = menu;
    if (active !== 'favorites' && !cards.length) {
      api.request(menu.active);
    }
  }, [menu.active]);

  return (
    <>
      <Header />
      <Container>
        <ControlContainer />
        <ListContainer cards={cards} />
      </Container>
    </>
  );
};

export default Home;
