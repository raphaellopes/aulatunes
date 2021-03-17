import React, { useEffect } from 'react';
import {
  Header, Container,
} from '../../components';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { ControlContainer, ListContainer } from './containers';

const Home = () => {
  const api = useApiHooks();
  const menu = useMenuHook();

  useEffect(() => {
    const { active } = menu.data;
    if (active !== 'favorites') {
      api.request(menu.data.active);
    }
  }, [menu.data.active]);

  return (
    <>
      <Header />
      <Container>
        <ControlContainer />
        <ListContainer />
      </Container>
    </>
  );
};

export default Home;
