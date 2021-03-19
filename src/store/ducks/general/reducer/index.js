import { GeneralTypes } from '../actions';

// reducers
export const initialState = {
  menu: {
    active: '',
    options: [
      { label: 'Albums', value: 'albums' },
      { label: 'Songs', value: 'songs' },
      { label: 'Favorites', value: 'favorites' },
    ],
  },
  filter: {
    search: '',
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

    case GeneralTypes.SET_SEARCH: {
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload || '',
        },
      };
    }

    default:
      return state;
  }
};
