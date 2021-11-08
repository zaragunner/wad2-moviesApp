import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';

const UpcomingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

const movies = data.results
 

  return (
   
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToWatchListIcon/>
          </>
   );
  }}
/>
);
};

export default UpcomingPage;