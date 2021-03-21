import React, { useEffect } from 'react';
import { ROUTE_ALBUMS } from '../../shared';
import { searchFilter } from '../../utils';
import { useApiHooks, API_FEAT_ALBUMS } from '../../store/ducks/api';
import { useGeneralHook } from '../../store/ducks/general';
import { useAlbumsHook } from '../../store/ducks/albums';
import { FAVORITE_ALBUMS } from '../../store/ducks/favorites';
import { ListContainer } from '../../containers';

const Albums = () => {
  const api = useApiHooks();
  const { setActive, filter } = useGeneralHook();
  const { data: albums, loading } = useAlbumsHook();

  useEffect(() => {
    setActive(ROUTE_ALBUMS);
    if (!albums.length) {
      api.request(API_FEAT_ALBUMS);
    }
  }, []);

  return (
    <ListContainer
      loading={loading}
      cards={albums.filter(searchFilter(filter.search))}
      emptyText="No results for Albums"
      favoritesFeature={FAVORITE_ALBUMS}
    />
  );
};

export default Albums;
