import { useSelector, useDispatch } from 'react-redux';
import { GeneralCreators as actions } from './actions';

export const useGeneralHook = () => {
  const dispatch = useDispatch();
  const generalState = (state) => state.general;
  const { menu, filter } = useSelector(generalState);

  // dispatchers
  const setActive = (value) => dispatch(actions.setActiveMenu(value));
  const setSearch = (value) => dispatch(actions.setSearch(value));

  return {
    menu,
    filter,
    setActive,
    setSearch,
  };
};
