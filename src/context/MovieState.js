import React, { useReducer } from "react";
import axios from "axios";

import MovieReducer from "./MovieReducer";
import {
  SEARCH_MOVIE,
  SET_LOADING,
  GET_MOVIE,
  SET_ERROR,
  CLEAR_ERROR
} from "./types";
import MovieContext from "./MovieContext";
const MovieState = props => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
    Error: ""
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search Users
  const searchMovie = async text => {
    setLoading();

    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=9b13bcef&s=${text}`
    );
    console.log("result: ", res);
    if (res.data.Error) {
      dispatch({
        type: SET_ERROR,
        payload: res.data.Error
      });
    } else {
      dispatch({
        type: SEARCH_MOVIE,
        payload: res.data.Search
      });
    }
  };

  const getMovie = async id => {
    setLoading();

    const movie = await axios.get(
      `https://www.omdbapi.com/?apikey=9b13bcef&i=${id}&plot=full`
    );

    dispatch({
      type: GET_MOVIE,
      payload: movie.data
    });
  };

  const clearError = () => dispatch({ type: CLEAR_ERROR });
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        Error: state.Error,
        searchMovie,
        getMovie,
        clearError
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
