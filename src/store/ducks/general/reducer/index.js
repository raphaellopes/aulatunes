import { ROUTE_ALBUMS, ROUTE_SONGS, ROUTE_FAVORITES } from '../../../../shared';
import { GeneralTypes } from '../actions';

// reducers
export const initialState = {
  menu: {
    active: '',
    options: [
      { label: 'Albums', value: ROUTE_ALBUMS, icon: 'compact-disc' },
      { label: 'Songs', value: ROUTE_SONGS, icon: 'music' },
      { label: 'Favorites', value: ROUTE_FAVORITES, icon: 'star' },
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
