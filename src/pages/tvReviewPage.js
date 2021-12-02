import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateTvPage";
import TvReview from "../components/tvReview";

const TvReviewPage = (props) => {
  const {show, review} = props.location.state
  return (
    <PageTemplate show={show}>
      <TvReview review={review} />
    </PageTemplate>
  );
};

export default withRouter(TvReviewPage);