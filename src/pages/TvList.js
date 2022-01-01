import React from "react";
import PageTemplate from "../components/templateTvListPage";
// import { useQuery } from 'react-query'
// import Spinner from '../components/spinner'
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

import { useContext} from 'react';
import { TvContext } from '../contexts/tvContext';

const  TvList = (props) => {

 
const context = useContext(TvContext);
const shows = context.shows.results

  return (
    <PageTemplate
      name="Discover Tv Shows"
      shows={shows}
    //   action={(movie) => {
    //     return <AddToFavoritesIcon movie={movie} />
    //   }}
    />
  );
};

export default TvList;