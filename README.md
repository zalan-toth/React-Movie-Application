# React Application for Movies
#### Assignment for Web App Development at SETU

This repository was cloned. Original repository: https://github.com/zalan-toth/react-movie-labs 

# Assignment 1 - ReactJS app.

Name: Zalán Tóth (20102768)

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Feature 1
+ Feature 2
+ Feature 3
+ etc
+ etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Getting similar movies to a given one - movie/${id}/similar
+ Getting movies that are currently playing - movie/now_playing
+ Getting movies that are trending today - trending/movie/day
+ Getting upcoming movies - movie/upcoming
+ Getting credits for a movie - movie/${id}/credits
+ Getting the latest movie added to TMDB - movie/latest
+ Getting movie credits for a person - person/${id}/movie_credits
+ Getting a person - person/${id}
+ Getting popular people - person/popular
+ Searching for movies based on title - search/movie&query=${title}
+ Getting the movie credits for a person - person/${id}/movie_credits

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]
#### Movie routes
+ /movies/discover - Discover movies (same as home)
+ /movies/discover/page/:page - Discover movies with current page
+ /movies/watchlist - List of movies that contains the ones that the user wants to watch!
+ /movies/upcoming - Provides upcoming movies
+ /movies/upcoming/page/:page - Provides upcoming movies with current page
+ /movies/trending/today - Provides movies that are trending today
+ /movies/trending/today/page/:page - Provides movies that are trending today with current page
+ /movies/playing - Provides movies that are currently playing
+ /movies/playing/page/:page - Provides movies that are currently playing with current page
+ /movies/latest - Gives the latest movie added to TMDB
+ /similar OR /similar/:id OR /movies/:id/similar - Provides similar movies to the given one (stateful and parameterised)
+ /movies/search - Searches for movie based on title
+ /movies/search/:title - Result of movie search
+ /movies/search/:title/page/:page - Result of movie search with pagination support for the result
+ /movies/:id/credits - Provides credits for a movie
#### People routes
+ /people/popular - Provides list of popular people with sorting support with 2 layouts for listing
+ /people/popular/page/:page - Provides list of popular people (_||_) with pagination support
+ /people/:id - Provides details about a person
+ /people/:id/credits/movie - Provides movie credits for person

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

+ I used a simple way to sort data in the popular people list table. Source that helped me create it: https://www.selbekk.io/blog/creating-sortable-tables-with-react
+ TMDB API was used extensively: https://developer.themoviedb.org/reference/intro/getting-started
+ Material UI / MUI was used extensively: https://mui.com/material-ui/ 



