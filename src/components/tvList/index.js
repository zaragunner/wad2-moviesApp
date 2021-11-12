import React from "react";
import Tv from "../tvCard";
import Grid from "@material-ui/core/Grid";

const TvList = ( {shows, action }) => {
  let tvCards = shows.map((tv) => (
    <Grid key={tv.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Tv key={tv.id} show={tv} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TvList;