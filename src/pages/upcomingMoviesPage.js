import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";
const UpcomingPage = (props) => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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