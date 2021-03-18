import React, { useEffect } from 'react';
import {
  Header, Container,
} from '../../components';
import { useApiHooks } from '../../store/ducks/api';
import { useMenuHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { ControlComponent, ListContainer } from './components';

const Home = () => {
  const api = useApiHooks();
  const { data: menu, setActive } = useMenuHook();
  const { data: albums } = useAlbumsHook();

  const cards = menu.active === 'albums' ? albums : [];

  useEffect(() => {
    const { active } = menu;
    if (active !== 'favorites' && !cards.length) {
      api.request(menu.active);
    }
  }, [menu.active]);

  const handleClickMenuOption = (value) => setActive(value);

  return (
    <>
      <Header />
      <Container>
        <ControlComponent
          menuOptions={menu.options}
          menuOptionActive={menu.active}
          onClickMenuOption={handleClickMenuOption}
        />
        <ListContainer cards={cards} />
      </Container>
    </>
  );
};

export default Home;
