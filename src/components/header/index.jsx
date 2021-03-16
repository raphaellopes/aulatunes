import React from 'react';

import { Toolbar } from '../toolbar';
import { Logo } from './styles';

import LogoSVG from '../../assets/img/logo.svg';

export const Header = () => (
  <Toolbar as="header">
    <Logo src={LogoSVG} alt="Aula Education" />
    My header
  </Toolbar>
);
