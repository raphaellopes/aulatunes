import React from 'react';
import { Navigation, Input } from '../../../components';

export const HomeControlContainer = () => {
// mocks
  const menuOptions = [
    { label: 'Albums', value: 'album', variant: 'primary' },
    { label: 'Songs', value: 'songs', variant: 'default' },
    { label: 'Favorites', value: 'favorites', variant: 'default' },
  ];

  const handleClickMenuOption = (value) => console.log('handleClickMenuOption', { value });

  return (
    <>
      <Navigation options={menuOptions} onClickOption={handleClickMenuOption} />
      <Input placeholder="Search" />
    </>
  );
};
