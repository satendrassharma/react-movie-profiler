import {
  SEARCH_MOVIE,
  SET_LOADING,
  GET_MOVIE,
  SET_ERROR,
  CLEAR_ERROR
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload || [],
        Error: "",
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case SET_ERROR:
      return {
        ...state,
        Error: action.payload,
        movies: [],
        loading: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        Error: ""
      };
    default:
      return state;
  }
};
