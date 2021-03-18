import { FavoritesTypes as Types } from '../actions';

// reducers
export const initialState = {
  albums: [],
  songs: [],
};

export const favoritesReducer = (state = initialState, action) => {
  const { meta, payload, type } = action;
  switch (type) {
    case Types.ADD: {
      return {
        ...state,
        [meta]: [
          ...state[meta], payload,
        ],
      };
    }

    case Types.REMOVE: {
      return {
        ...state,
        [meta]: state[meta].filter((value) => value !== payload),
      };
    }

    default:
      return state;
  }
};
