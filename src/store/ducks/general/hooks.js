import { useSelector, useDispatch } from 'react-redux';
import { GeneralCreators as actions } from './actions';

export const useMenuHook = () => {
  const dispatch = useDispatch();
  const menuState = (state) => state.general.menu;
  const data = useSelector(menuState);

  // dispatchers
  const setActive = (value) => dispatch(actions.setActiveMenu(value));

  return {
    data,
    setActive,
  };
};
