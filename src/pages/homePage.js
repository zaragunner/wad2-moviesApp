import React  from "react";
import PageTemplate from "../components/templateMovieListPage";
// import { useQuery } from 'react-query'
// import Spinner from '../components/spinner'

import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useContext} from 'react';
import { MvContext } from '../contexts/mvContext';


const HomePage = (props) => {
  
  const context = useContext(MvContext);
  const movies = context.movies.results
  // if (isLoading) {
  //   return <Spinner />
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>
  // }  
  // const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const favorites = movies.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))
 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default HomePage;