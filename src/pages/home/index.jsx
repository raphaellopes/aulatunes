import React from 'react';

// @TODO: Rename this page to Main and implements the routes here
import {
  Header, Container, Navigation, Input,
} from '../../components';

const Home = () => (
  <>
    <Header />
    <Container>
      <Navigation />
      <Input placeholder="Search" />
    </Container>
  </>
);

export default Home;
