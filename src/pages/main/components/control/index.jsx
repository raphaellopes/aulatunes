import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Navigation, Input, Icon } from '../../../../components';
import { Container, InputWrapper, ClearButton } from './styles';

export const ControlComponent = ({
  menuOptions, menuOptionActive, onClickMenuOption, onChangeSearch,
}) => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    onChangeSearch(value);
  };

  const handleClickSearchClear = () => {
    setSearch('');
    onChangeSearch('');
  };

  const renderInput = (
    <InputWrapper>
      <Input
        data-testid="search"
        placeholder="Filter rendered cards"
        value={search}
        onChange={handleChangeSearch}
      />
      {search.length > 0 && (
        <ClearButton data-testid="search-clear" onClick={handleClickSearchClear}>
          <Icon icon="times" />
        </ClearButton>
      )}
    </InputWrapper>
  );

  return (
    <Container>
      <Navigation
        active={menuOptionActive}
        options={menuOptions}
        onClickOption={onClickMenuOption}
      />
      {renderInput}
    </Container>
  );
};

ControlComponent.propTypes = {
  menuOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
  menuOptionActive: PropTypes.string.isRequired,
  onClickMenuOption: PropTypes.func.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};
