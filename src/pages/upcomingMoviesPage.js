import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner';
import { useContext} from 'react';
import { MvContext } from '../contexts/mvContext';

const UpcomingPage = (props) => {
  const context = useContext(MvContext);
 let movies = context.upcomingMovies.results;

  return (
   
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToWatchListIcon movie={movie}/>
            
          </>
   );
  }}
/>
);
};

export default UpcomingPage;