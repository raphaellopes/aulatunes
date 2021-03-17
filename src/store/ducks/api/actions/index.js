// action types
const prefix = 'api';
export const ApiTypes = {
  REQUEST: `${prefix}/request`,
  DATA: `${prefix}/data`,
};

// action creators
export const ApiCreators = {
  request: (payload) => ({
    type: ApiTypes.REQUEST,
    payload,
  }),
  data: (payload) => ({
    type: ApiTypes.DATA,
    payload,
  }),
};
