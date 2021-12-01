import React from "react";
// import Header from "../headerMovieList";
// import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TvList from "../tvList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function TvListPageTemplate({ shows, action }) {
  const classes = useStyles();
  // const [nameFilter, setNameFilter] = useState("");
  // const [genreFilter, setGenreFilter] = useState("0");
  // const genreId = Number(genreFilter);

  // let displayedShows = shows
  //   .filter((tv) => {
  //     return tv.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  //   })
  //   .filter((tv) => {
  //     return genreId > 0 ? tv.genre_ids.includes(genreId) : true;
  //   });

  // const handleChange = (type, value) => {
  //   if (type === "name") setNameFilter(value);
  //   else setGenreFilter(value);
  // };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        {/* <Header title={title} /> */}
      </Grid>
      <Grid item container spacing={5}>
       
        <TvList action={action} shows={shows}></TvList> </Grid>
    </Grid>
  );
}
export default TvListPageTemplate;