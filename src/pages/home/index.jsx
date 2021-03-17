import React from 'react';
import {
  Header, Container,
} from '../../components';
import { ControlContainer, ListContainer } from './containers';

const Home = () => (
  <>
    <Header />
    <Container>
      <ControlContainer />
      <ListContainer />
    </Container>
  </>
);

export default Home;
