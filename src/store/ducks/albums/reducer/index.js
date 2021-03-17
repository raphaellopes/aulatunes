import { AlbumsTypes as Types } from '../actions';

// reducers
export const initialState = {
  loading: false,
  data: [],
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.STATUS: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case Types.DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
