import React from 'react';
import PropTypes from 'prop-types';
import { Container, MenuItem } from './styles';

export const Navigation = ({ options, onClickOption }) => {
  const renderOption = ({ label, value, variant }) => (
    <MenuItem
      key={`menu-option-${value}`}
      variant={variant}
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
    variant: PropTypes.oneOf(['default', 'primary']),
  })).isRequired,
  onClickOption: PropTypes.func.isRequired,
};
