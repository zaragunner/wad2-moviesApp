import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterTvCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TvList from "../tvList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function TvListPageTemplate({ shows,name, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedShows = shows
    .filter((tv) => {
      return tv.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((tv) => {
      return genreId > 0 ? tv.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
       <Grid item xs={12}>
     
        <Header title={name} />
     
      </Grid>
      <Grid item container spacing={5}>
      <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        
        <TvList action={action} shows={displayedShows}></TvList> </Grid>
    </Grid>
  );
}
export default TvListPageTemplate;