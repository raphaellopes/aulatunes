// action types
const prefix = 'songs';

export const SongsTypes = {
  STATUS: `${prefix}/loading`,
  DATA: `${prefix}/data`,
};

// action creators
export const SongsCreators = {
  status: (payload) => ({
    type: SongsTypes.STATUS,
    payload,
  }),
  data: (payload) => ({
    type: SongsTypes.DATA,
    payload,
  }),
};
