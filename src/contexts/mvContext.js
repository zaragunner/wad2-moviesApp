import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "../api/movie-api";
import { getMovie } from "../api/movie-api";
import { getUpcomingMovies } from "../api/movie-api";

export const MvContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result }
    default:
      return state;
  }
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "load":
      return {
              upcomingMovies: action.payload.result}
    default:
      return state;
  }
};




const MoviesContextProvider = props => {
  //new state   const [rating, setRating] = useState(3);
  
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [state1, dispatch1] = useReducer(reducer1, {  upcomingMovies : []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(result => {
      console.log("Discover " , result);
      dispatch({ type: "load", payload: {result}});
    })
  },[]);

  useEffect(() => {
    getUpcomingMovies().then(result => {
      console.log("UPcoming " , result);
      dispatch1({ type: "load", payload: {result}});
    })
  },[]);

  



  return (
    <MvContext.Provider
      value={{
        movies: state.movies,
        upcomingMovies : state1.upcomingMovies,
        setAuthenticated
      }}
    >
      {props.children}
    </MvContext.Provider>
  );
};

export default MoviesContextProvider