# wad2-moviesApp

# Assignment 1 - ReactJS app.

Name: Zara Gunner

## Overview.

This repository contains all Web App Development and Agile labs for CA1.


### Features.
+ Upcoming Movies Page
+ Discover TV Shows Page
+ Top Rated Movies Page
+ TV Listings Page
+ Simple Authentication -> Change button value.
+ Show / Hide nav routes based on Login Status using ternary operator.
+ Season Details Page to find details about specific season of a show.

## Setup requirements.
Usual npm install

## API endpoints.
+ Upcoming Movies  :  
API call : `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}` <br/>
Description: Returns an array of upcoming movies <br/>
Path: path="/movies/upcoming" <br/>

+ Discover TV Shows
API Call : `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=3` <br/>
Description: Returns an array of tv shows.<br/>
Path:  path="/tv"<br/>

+ TV Show
API Call : `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`<br/>
Description: Returns individual show object.<br/>
Path: path="/tv/:id"<br/>

+ TV Show Images
API Call : `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`<br/>
Description: Returns array of images for specified tv show.<br/>
Path: N/A<br/>

+ TV Reviews
API Call : `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}` <br/>
Description : Returns tv reviews for specified tv show <br/>
Path: N/A <br/>

+ Top Rated
API Call : `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US` <br/>
Description: Returns top rated movies in the TMDB database. <br/>
Path :  path='/toprated' <br/>

+ TV Listings
API Call :  `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1` <br/>
Description : Returns tv shows that will air today. <br/>
Path : path="/listings"<br/>

+ Season Details
 API Call : `https://api.themoviedb.org/3/tv/${showid}/season/${seasonno}?api_key=${process.env.REACT_APP_TMDB_KEY}` <br/>
Description : Returns details of the specified season of the specifed show <br/>
Path : path = "/tv/:showid/:seasonno" <br/>


## App Design.
### UI Design.



>Shows list of upcoming movies.

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

+ `<Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />`
+ `<Route path="/tvreviews/:id" component={TvReviewPage} />`
+ `<Route exact path="/tv" component={TvList} />`
+ `<Route path = "/tv/:showid/:seasonno" component={SeasonPage} />`
+ `<Route exact path="/listings" component={TvListings} />`
+ `<Route path="/tv/:id" component={TvPage} />`
+ `<Route exact path='/toprated' component={TopRatedPage} />`
 
## Independent learning.
+ Using state to set the value of the login button to rerender the page once the new value is assigned.
+ Adding a route with more than one parameter being passed in. "/tv/:showid/:seasonno". This required research into caching the query params, to extract both id values.



