import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Input } from '../../../components';

export const ControlComponent = ({ menuOptions, menuOptionActive, onClickMenuOption }) => (
  <>
    <Navigation
      active={menuOptionActive}
      options={menuOptions}
      onClickOption={onClickMenuOption}
    />
    <Input placeholder="Search" />
  </>
);

ControlComponent.propTypes = {
  menuOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  menuOptionActive: PropTypes.string.isRequired,
  onClickMenuOption: PropTypes.func.isRequired,
};
