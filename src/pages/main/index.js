import React from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { Container, Header } from '../../components';
import { useGeneralHook } from '../../store/ducks/general';
import { ControlComponent } from './components';
import Albums from '../albums';
import Songs from '../songs';
import Favorites from '../favorites';

const Main = ({ history }) => {
  const { menu, setSearch } = useGeneralHook();

  const handleClickMenuOption = (value) => {
    history.push(value);
  };

  const renderControl = (
    <ControlComponent
      menuOptions={menu.options}
      menuOptionActive={menu.active}
      onClickMenuOption={handleClickMenuOption}
      onChangeSearch={setSearch}
    />
  );

  return (
    <>
      <Header />
      <Container>
        {renderControl}
        <Switch>
          <Route exact path="/">
            <Redirect to="/albums" />
          </Route>
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </Container>
    </>
  );
};

Main.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Main;
