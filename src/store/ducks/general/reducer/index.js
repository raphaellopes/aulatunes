import { GeneralTypes } from '../actions';

// reducers
export const initialState = {
  menu: {
    active: 'albums',
    options: [
      { label: 'Albums', value: 'albums' },
      { label: 'Songs', value: 'songs' },
      { label: 'Favorites', value: 'favorites' },
    ],
  },
};

export const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GeneralTypes.SET_ACTIVE_MENU: {
      return {
        ...state,
        menu: {
          ...state.menu,
          active: action.payload,
        },
      };
    }

    default:
      return state;
  }
};
