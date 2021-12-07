import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import MonetizationIcon from "@material-ui/icons/MonetizationOn";
// import StarRate from "@material-ui/icons/StarRate";
// import NavigationIcon from "@material-ui/icons/Navigation";
// import Fab from "@material-ui/core/Fab";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import TvReviews from "../TvReviews"
// import { SettingsApplications } from "@material-ui/icons";

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


const SeasonDetails = ({ season }) => {  // Don't miss this!
  const classes = useStyles();
//   const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
     <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Episodes" className={classes.chip} color="primary" />
        </li>
        {season.episodes.map((g) => (
          <li key={g.name}>
            <Chip label={g.episode_number} className={classes.chip} />
          </li>
          
        ))}
        </Paper>
    </>
  );
};

export default SeasonDetails ;