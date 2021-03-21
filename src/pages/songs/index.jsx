import React, { useEffect } from 'react';
import { ROUTE_SONGS } from '../../shared';
import { searchFilter } from '../../utils';
import { useApiHooks, API_FEAT_SONGS } from '../../store/ducks/api';
import { useGeneralHook } from '../../store/ducks/general';
import { useSongsHook } from '../../store/ducks/songs';
import { FAVORITE_SONGS } from '../../store/ducks/favorites';
import { ListContainer } from '../../containers';

const Songs = () => {
  const api = useApiHooks();
  const { setActive, filter } = useGeneralHook();
  const { data: songs, loading } = useSongsHook();

  useEffect(() => {
    setActive(ROUTE_SONGS);
    if (!songs.length) {
      api.request(API_FEAT_SONGS);
    }
  }, []);

  return (
    <ListContainer
      loading={loading}
      cards={songs.filter(searchFilter(filter.search))}
      emptyText="No results for Songs"
      favoritesFeature={FAVORITE_SONGS}
    />
  );
};

export default Songs;
