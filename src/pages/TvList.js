import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvShows} from '../api/tmdb-api'
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const  TvList = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discoverTvShows', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))
 

  return (
    <PageTemplate
      title="Discover Tv Shows"
      shows={shows}
    //   action={(movie) => {
    //     return <AddToFavoritesIcon movie={movie} />
    //   }}
    />
  );
};

export default TvList;