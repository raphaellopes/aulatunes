import { useSelector, useDispatch } from 'react-redux';
import { FavoritesCreators as actions } from './actions';

export const useFavotitesHook = () => {
  const dispatch = useDispatch();
  const favoritesState = (state) => state.favorites;
  const data = useSelector(favoritesState);

  // dispatchers
  const add = (value, meta) => dispatch(actions.add(value, meta));
  const remove = (value, meta) => dispatch(actions.remove(value, meta));

  return {
    data,
    add,
    remove,
  };
};
