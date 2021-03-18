import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { kebabCase } from '../../../utils';
import { Navigation, Input } from '../../../components';

export const ControlComponent = ({
  menuOptions, menuOptionActive, onClickMenuOption, onChangeSearch,
}) => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    onChangeSearch(kebabCase(value));
  };

  return (
    <>
      <Navigation
        active={menuOptionActive}
        options={menuOptions}
        onClickOption={onClickMenuOption}
      />
      <Input
        placeholder="Search"
        value={search}
        onChange={handleChangeSearch}
      />
    </>
  );
};

ControlComponent.propTypes = {
  menuOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  menuOptionActive: PropTypes.string.isRequired,
  onClickMenuOption: PropTypes.func.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};
