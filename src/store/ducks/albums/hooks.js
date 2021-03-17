import { useSelector } from 'react-redux';

export const useAlbumsHook = () => {
  const albumsState = (state) => state.albums;
  const data = useSelector(albumsState);
  console.log('>>>', { data });

  return {
    ...data,
  };
};
