import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "../api/movie-api";

export const MvContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <MvContext.Provider
      value={{
        movies: state.movies,
        setAuthenticated
      }}
    >
      {props.children}
    </MvContext.Provider>
  );
};

export default MoviesContextProvider