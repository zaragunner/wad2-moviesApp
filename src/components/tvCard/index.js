import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";

import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import {Link} from "react-router-dom"
// import Avatar from "@material-ui/core/Avatar";
// import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TvCard({ show }) {
  const classes = useStyles();



  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
    //   avatar={
    //     movie.favorite ? (
    //       <Avatar className={classes.avatar}>
    //         <FavoriteIcon />
    //       </Avatar>
    //     ) : null
    //   }
      name={
        <Typography variant="h5" component="p">
          {show.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
     
        <Link to={`/tv/${show.id}`}>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}