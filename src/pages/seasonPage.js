import React from "react";
import { withRouter } from "react-router-dom";
// import SeasonDetails from "../components/seasonDetails";
// import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { getEpisodes } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    typography :{
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
      padding: '12px',
      margin: '16px',
      background: '#f6f6f6'
    },
    typographyTitle :{
      padding: '6px',
      margin: '1px',
      alignContent: 'center',
      width: '100%'
    }
  }));

const SeasonPage = (props) => {
  const { showid} = props.match.params
  const {seasonno} = props.match.params
  const classes = useStyles();
  const { data:  season,  error, isLoading, isError } = useQuery(
    ["show",  { showid : showid}, "season", {seasonno : seasonno}],
        getEpisodes
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
if (season){
  return (
    <>
     <Paper component="div" className={classes.root}>
     <Typography variant="h6" component="div" className={classes.typographyTitle} >
      <h2> Season  {season.season_number}:</h2>
       </Typography>
       <div>
     
          <Chip label="Episodes" className={classes.chip} color="primary" />
        
     
         {season.episodes.map((c) => (
             <span key={c.air_date}> 
           
                 <Typography variant="h6" component="div" className={classes.typography} >
                    <div>
                      <h3> 
                      Ep No: {c.episode_number}  - {c.name}
                      </h3>
                    </div>
                    <div>
                      {c.overview}
                    </div>
                    
               
                 <Chip label={`Air Date : ${c.air_date}`}/>
              
      </Typography>
           
                
                
                 </span>
             ))}
        
          </div>
          </Paper>

    </>
  );
        };
};

export default withRouter(SeasonPage);