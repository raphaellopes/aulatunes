// action types
const prefix = 'albuns';

export const AlbumsTypes = {
  STATUS: `${prefix}/loading`,
  DATA: `${prefix}/data`,
};

// action creators
export const AlbumsCreators = {
  status: (payload) => ({
    type: AlbumsTypes.STATUS,
    payload,
  }),
  data: (payload) => ({
    type: AlbumsTypes.DATA,
    payload,
  }),
};
