import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvList from "./pages/TvList"
import TvListings from "./pages/tvListingsPage"
import TvPage from './pages/tvDetailsPage'
import TopRatedPage from './pages/topRatedPage'
import TvReviewPage from './pages/tvReviewPage'
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SeasonPage from "./pages/seasonPage"
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        {" "}
<Switch>
<Route exact path="/reviews/form" component={AddMovieReviewPage} />
<Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
  <Route path="/reviews/:id" component={MovieReviewPage} />
  <Route path="/tvreviews/:id" component={TvReviewPage} />
    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
    <Route path="/movies/:id" component={MoviePage} />
    <Route exact path="/tv" component={TvList} />
    <Route path = "/tv/:showid/:seasonno" component={SeasonPage} />
    <Route exact path="/listings" component={TvListings} />
    <Route path="/tv/:id" component={TvPage} />
    <Route exact path='/toprated' component={TopRatedPage} />
    <Route exact path="/" component={HomePage} />
    <Redirect from="*" to="/" />
  </Switch>
  </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));


