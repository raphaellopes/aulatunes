import React from 'react';

import { Logo, Container, Content } from './styles';

import LogoSVG from '../../assets/img/logo.svg';

export const Header = () => (
  <Container as="header">
    <Content>
      <Logo src={LogoSVG} alt="Aula Education" />
    </Content>
  </Container>
);
