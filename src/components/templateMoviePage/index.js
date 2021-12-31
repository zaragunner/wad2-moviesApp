import React from "react"; 
import MovieHeader from "../headerMovie";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/ImageList";
// import GridListTile from "@material-ui/core/ImageListItem";
// import { getMovieImages } from "../../api/tmdb-api";
// import { useQuery } from "react-query";
// import Spinner from '../spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplateMoviePage = ({ movie, children }) => {
  const classes = useStyles();
  // 

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.root}>
            <GridList rowHeight={500} className={classes.gridList} cols={1}>
             
            </GridList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;