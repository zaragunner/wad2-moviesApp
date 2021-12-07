import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import TvReviews from "../TvReviews"
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


const TvDetails = ({ show }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
          
        ))}
        </Paper>
        <Paper component="ul" className={classes.root}>
         <Chip  className={classes.chip} label={`Number of seasons: ${show.seasons.length}`} />
        <Chip className={classes.chip} label={`Number of episodes: ${show.number_of_episodes}`}/>
       
           </Paper>
     
      <Paper component="ul" className={classes.root}>
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} `}
        />
        <Chip label={`Number of votes: ${show.vote_count}`} />
        <Chip label={`First air date: ${show.first_air_date}`} />
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Production Countries" className={classes.chip} color="primary" />
        </li>
        {show.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Seasons" className={classes.chip} color="primary" />
        </li>
        {show.seasons.map((g) => (
          <Link to={`/tv/${show.id}/${g.season_number}`}>
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
          </Link>
        ))}
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TvReviews show={show} />
      </Drawer>
    </>
  );
};

export default TvDetails ;