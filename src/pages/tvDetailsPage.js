
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
// import useMovie from "../hooks/useMovie";
import { getShow } from '../api/movie-api'

const TvDetailsPage = (props) => {

   const [show, setShow] = useState({})
    const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    getShowDetails();
  }, []);
  
  const getShowDetails = async () => {
    const { id } = props.match.params
    const show = await getShow(id) 
    // console.log("ShOW IS" + show)
    setShow(show)
      setLoading(false);
    
  };
  
  
  
  if (isLoading) {
    return  <p>Waiting for movie details</p>
  }
  return (
   
        <>
          <PageTemplate show={show}>
            <TvDetails show={show} />
          </PageTemplate>
        </>
      ) 
 
};

export default withRouter(TvDetailsPage);