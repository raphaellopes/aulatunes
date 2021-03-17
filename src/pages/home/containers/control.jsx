import React from 'react';

import { Navigation, Input } from '../../../components';
import { useMenuHook } from '../../../store/ducks/general';

export const ControlContainer = () => {
  const menu = useMenuHook();

  const handleClickMenuOption = (value) => menu.setActive(value);

  return (
    <>
      <Navigation
        active={menu.data.active}
        options={menu.data.options}
        onClickOption={handleClickMenuOption}
      />
      <Input placeholder="Search" />
    </>
  );
};
