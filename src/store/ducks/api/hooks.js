import { useDispatch } from 'react-redux';
import { ApiCreators as actions } from './actions';

export const useApiHooks = () => {
  const dispatch = useDispatch();

  const request = (page) => dispatch(actions.request(page));

  return {
    request,
  };
};
