// action types
const prefix = 'general';
export const GeneralTypes = {
  SET_ACTIVE_MENU: `${prefix}/set-active-menu`,
};

// reducers
const initialState = {
  menu: 'albums',
};

export default function general(state = initialState, action) {
  switch (action.type) {
    case GeneralTypes.SET_ACTIVE_MENU: {
      return {
        ...state,
        menu: action.payload,
      };
    }

    default:
      return state;
  }
}

// action creators
export const GeneralCreators = {
  setActiveMenu: (payload) => ({
    type: GeneralTypes.SET_ACTIVE_MENU,
    payload,
  }),
};
