import { useSelector } from 'react-redux';

export const useSongsHook = () => {
  const songsState = (state) => state.songs;
  const data = useSelector(songsState);

  return {
    ...data,
  };
};
