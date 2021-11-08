import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToWatchListIcon = ({movie}) => {
    const context = useContext(MoviesContext);
    const handleAddToWatchList = (e) => {
        e.preventDefault();
        context.addToWatchList(movie);
          };
    return (
        <IconButton aria-label="add to watchList" onClick={handleAddToWatchList} >
          <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
      );
}

export default AddToWatchListIcon;