import React from "react";
import Movie from "../movieCard";
import Grid from "@material-ui/core/Grid";
import { useContext} from 'react';
import { MvContext } from '../../contexts/mvContext';



const MovieList = ( { action }) => {
  const context = useContext(MvContext);
 console.log(context)
  let movieCards = context.movies.results.map(m => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default MovieList;