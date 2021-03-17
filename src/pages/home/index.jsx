import React from 'react';

import {
  Header, Container, Navigation, Input, CardMusic,
} from '../../components';

// @TODO: Rename this page to Main and implements the routes here
const Home = () => {
  const menuOptions = [
    { label: 'Albums', value: 'album', variant: 'primary' },
    { label: 'Songs', value: 'songs', variant: 'default' },
    { label: 'Favorites', value: 'favorites', variant: 'default' },
  ];

  const handleClickMenuOption = (value) => console.log('handleClickMenuOption', { value });

  return (
    <>
      <Header />
      <Container>
        <Navigation options={menuOptions} onClickOption={handleClickMenuOption} />
        <Input placeholder="Search" />
        <CardMusic
          title="Love & Hate"
          subtitle="By Michael Kiwanuka"
        />
      </Container>
    </>
  );
};

export default Home;
