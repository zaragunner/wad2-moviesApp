import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvListings} from '../api/tmdb-api'
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const  TvList = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('Tv Show Listings', getTvListings)

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
     name="Tv Shows Airing Today"
      shows={shows}
    //   action={(movie) => {
    //     return <AddToFavoritesIcon movie={movie} />
    //   }}
    />
  );
};

export default TvList;