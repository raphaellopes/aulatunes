import React from 'react';
import PropTypes from 'prop-types';
import { Container, MenuItem, MenuIcon } from './styles';

export const Navigation = ({ options, active, onClickOption }) => {
  const renderIcon = (value) => <MenuIcon icon={value} />;

  const renderOption = ({ label, value, icon }) => (
    <MenuItem
      key={`menu-option-${value}`}
      data-testid={`menu-option-${value}${active === value ? '-active' : ''}`}
      variant={active === value ? 'primary' : 'default'}
      onClick={active === value ? undefined : () => onClickOption(value)}
    >
      {renderIcon(icon)}
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
