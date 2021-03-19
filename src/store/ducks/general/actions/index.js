// action types
const prefix = 'general';
export const GeneralTypes = {
  SET_ACTIVE_MENU: `${prefix}/set-active-menu`,
  SET_SEARCH: `${prefix}/set-search`,
};

// action creators
export const GeneralCreators = {
  setActiveMenu: (payload) => ({
    type: GeneralTypes.SET_ACTIVE_MENU,
    payload,
  }),
  setSearch: (payload) => ({
    type: GeneralTypes.SET_SEARCH,
    payload,
  }),
};
