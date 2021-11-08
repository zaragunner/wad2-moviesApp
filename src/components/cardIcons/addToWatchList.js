import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToWatchListIcon = () => {
    return (
        <IconButton aria-label="add to favorites" >
          <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
      );
}

export default AddToWatchListIcon;