import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch,  } from "react-router-dom";
// import HomePage from "./pages/homePage";
// import MoviePage from "./pages/movieDetailsPage";
// import TvList from "./pages/TvList"
// import TvListings from "./pages/tvListingsPage"
// import TvPage from './pages/tvDetailsPage'
// import TopRatedPage from './pages/topRatedPage'
// import TvReviewPage from './pages/tvReviewPage'
// import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
// import MovieReviewPage from "./pages/movieReviewPage";
// import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
// import SeasonPage from "./pages/seasonPage"
// import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";


const TvListings         = lazy(() => import("./pages/tvListingsPage"));
const TvList             = lazy(() => import( "./pages/TvList"));
const HomePage           = lazy(() => import("./pages/homePage"));
const MoviePage          = lazy(() => import("./pages/movieDetailsPage"));
const TvPage             = lazy(() => import ('./pages/tvDetailsPage'));
const TopRatedPage       = lazy(() => import ('./pages/topRatedPage'));
const TvReviewPage       = lazy(() => import ('./pages/tvReviewPage'));
const FavoriteMoviesPage = lazy(() => import ("./pages/favoriteMoviesPage"));
const MovieReviewPage    = lazy(() => import ("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import ("./pages/upcomingMoviesPage"));
const SeasonPage         = lazy(() => import ("./pages/seasonPage"));
const SiteHeader         = lazy(() => import ('./components/siteHeader'));

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
      <Suspense fallback={<h1> Loading component </h1>} >
        <SiteHeader />
      </Suspense>
      <AuthProvider>
         <AuthHeader />
        <MoviesContextProvider>
        {" "}
        <Suspense fallback={<h1>Loading page</h1>}>
<Switch>
<Route exact path="/reviews/form" component={AddMovieReviewPage} />
<Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
  <Route path="/reviews/:id" component={MovieReviewPage} />
  <Route path="/tvreviews/:id" component={TvReviewPage} />
    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/movies/:id" component={MoviePage} />
    <Route exact path="/tv" component={TvList} />
    <Route path = "/tv/:showid/:seasonno" component={SeasonPage} />
    <Route exact path="/listings" component={TvListings} />
    <PrivateRoute path="/tv/:id" component={TvPage} />
    <Route exact path='/toprated' component={TopRatedPage} />
    <Route exact path="/" component={HomePage} />
    <Redirect from="*" to="/" />
  </Switch>
  </Suspense>
  </MoviesContextProvider>
  </AuthProvider>

      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));


