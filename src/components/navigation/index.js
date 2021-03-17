import React from 'react';
import PropTypes from 'prop-types';
import { Container, MenuItem } from './styles';

export const Navigation = ({ options, active, onClickOption }) => {
  const renderOption = ({ label, value }) => (
    <MenuItem
      key={`menu-option-${value}`}
      variant={active === value ? 'primary' : 'default'}
      onClick={() => onClickOption(value)}
    >
      {label}
    </MenuItem>
  );

  return (
    <Container>
      {options.map(renderOption)}
    </Container>
  );
};

Navigation.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onClickOption: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
