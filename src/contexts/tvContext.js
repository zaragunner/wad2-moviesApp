import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTvShows } from "../api/movie-api";


export const TvContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return {shows : action.payload.result }
    default:
      return state;
  }
};


const TvContextProvider = props => {
  //new state   const [rating, setRating] = useState(3);
  
  const [state, dispatch] = useReducer(reducer, { shows: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getTvShows().then(result => {
      console.log("TvShows  " , result);
      dispatch({ type: "load", payload: {result}});
    })
  },[]);
  



  return (
    <TvContext.Provider
      value={{
        shows: state.shows,
        setAuthenticated
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider