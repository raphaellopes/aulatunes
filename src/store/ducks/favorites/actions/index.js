// action types
const prefix = 'favorites';

export const FavoritesTypes = {
  ADD: `${prefix}/add`,
  REMOVE: `${prefix}/remove`,
};

// action creators
export const FavoritesCreators = {
  add: (payload, meta) => ({
    type: FavoritesTypes.ADD,
    payload,
    meta,
  }),
  remove: (payload, meta) => ({
    type: FavoritesTypes.REMOVE,
    payload,
    meta,
  }),
};
