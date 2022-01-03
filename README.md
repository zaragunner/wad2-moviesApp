# Assignment 2 - Web API.

Name: Zara Gunner

# Note all API work is in https://github.com/zaragunner/wad-api-labs.
# All API calls were passed to this API through proxy on port 8080.

## Features.

 + router.get('/tmdb/upcoming')
 + router.get('/tmdb/discover')
 + router.get('/tmdb/movies/:id')
 + router.get('/tmdb/toprated')
 + router.get('/tmdb/tvshows')
 + router.get('/tmdb/listings')
 + router.get('/tmdb/tvshows/:id')

## Installation Requirements

+ Clone wad2-moviesApp
`git clone https://github.com/zaragunner/wad2-moviesApp.git`

+ Clone wad-apiLabs
`git clone https://github.com/zaragunner/wad-api-labs.git`

+ open both projects in code editor of your choice

+ `npm install`

+ `npm run start` on both projects

## API Configuration
.env file structure similar to below
**ALL mock values

+ REACT_APP_TMDB_KEY=dede9345567136f8a240398
+ FAST_REFRESH=false
+ NODE_ENV=development
+ PORT=3000
+ HOST=localhost
+ MONGO_DB=mongodb://localhost:27017/movies_db
+ SEED_DB=True
+ SECRET=secretsecret


## API Design

Swagger Documentation (https://app.swaggerhub.com/apis/student2801/movies-api/1.0.0)


## Security and Authentication
![image](https://user-images.githubusercontent.com/47563922/147958956-fabd795b-3550-41ed-9759-3182ec626e7f.png) <br/>
Here we can see that every route within the react app is a protected route except for login and signup.<br/>
These routes are being protected using the 'ProtectedRoute' module which was imported.<br/>

This application uses passport to ensure authentication is required to access the API routes.<br/>
<img width="419" alt="image" src="https://user-images.githubusercontent.com/47563922/147959259-14892033-c7c9-4fe0-ad63-73d760d09d77.png">


## Integrating with React App
I integrated the API with this app, by creating a new API file called 'movie-api'.<br/>
This api file is used to make all the API calls to my local hosted API through proxy on host:8080.<br/>
The API requests that were previously going reactApp -> TDB API, now routed through the movie-api, reactApp -> MovieAPI -> TMDBAPI/


## Extra features

Instead of just changing the import statement on each file, I decided to store all of the movie lists such as 'Discover', 'Upcoming', and 'TopRated', and the TV Show lists such as 'Discover' and 'TvListings' in their own context files. This allows for the data to be loaded immeaditely on site load up, which helps improve responsiveness when using the application.

## Independent learning

In order to get the parameters passed from the react app -> movie-api -> TMDBapi to return the details from a specific movie / tvshow I had to do some research. <br/>
I had to learn about promises and asynchronous functions.<br/>
To implement this I had to utilise a lot of Reacts core functionalities.<br/>
<img width="258" alt="image" src="https://user-images.githubusercontent.com/47563922/147959994-7caab9d1-5042-45d0-8d87-e6a943968c19.png"><br/>

This inloved state management, setting state values.<br/>
Extracting the ID from the properties passed to the page.<br/>
Ensuring the GetMovie() call was called as an asynchronous function, to ensure the page waited for the response.<br/>
And then using the UseEffect() functionality to update the contents of the page once the value for Movie was updated.<br/>
<br/>
This was then implemented for getTvShow also.<br/>

I also integrated swagger documentation to my application.<br/>
This was used as more visually appealing way to view the applications API functionality.<br/>
This involved writing a YAML file which was then rendered to be the library.<br/>
