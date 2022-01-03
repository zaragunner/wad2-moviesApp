import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/movie-api'


const  MovieDetailsPage  = (props) => {
  //  HELP ON THIS FROM STACK OVERFLOW  https://stackoverflow.com/questions/42132290/wait-for-react-promise-to-resolve-before-render#:~:text=Add%20a%20comment-,5,for%20functional%20components%20with%20hooks%3A,-function%20App()%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20const
  const [movie, setMovie] = useState({})
  const [isLoading, setLoading] = useState(true);

useEffect(() => {
  getMovieDetails();
}, []);

const getMovieDetails = async () => {
  const { id } = props.match.params
  const movie = await getMovie(id) 
  // console.log("MOVIE IS" + movie)
  setMovie(movie)
    setLoading(false);
  
};



if (isLoading) {
  return  <p>Waiting for movie details</p>
}
return (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      )
}

export default withRouter(MovieDetailsPage);