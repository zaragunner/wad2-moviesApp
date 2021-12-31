import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTvShows, getTvListings } from "../api/movie-api";


export const TvContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return {shows : action.payload.result }
    default:
      return state;
  }
};

const reducer1 = (state, action) => {
    switch (action.type) {
      case "load":
        return {listings : action.payload.result }
      default:
        return state;
    }
  };


const TvContextProvider = props => {
  //new state   const [rating, setRating] = useState(3);
  
  const [state, dispatch] = useReducer(reducer, { shows: []});
  const [state1, dispatch1] = useReducer(reducer1, { listings: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getTvShows().then(result => {
      console.log("TvShows  " , result);
      dispatch({ type: "load", payload: {result}});
    })
  },[]);

  useEffect(() => {
    getTvListings().then(result => {
      console.log("TvListings  " , result);
      dispatch1({ type: "load", payload: {result}});
    })
  },[]);
  



  return (
    <TvContext.Provider
      value={{
        shows: state.shows,
        listings : state1.listings,
        setAuthenticated
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider