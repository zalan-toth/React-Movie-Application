# React Application for Movies
#### Assignment for Web App Development at SETU

This repository was cloned. **Original repository:** https://github.com/zalan-toth/react-movie-labs 

# Assignment 1 - ReactJS app.

Name: *Zalán Tóth* (20102768)

## Overview.

[A brief statement on the content of this repository.]

This repository contains the code for a TMDB React application made by *Zalán Tóth*. The code contains several new files, routes, endpoints etc. compared to the original repository that can be found in the beginning of the readme file. Code was cleaned up to not give unnecessary warnings, when running. This application was developed using WebStorm IDE by JetBrains.

**Every segment of this assignment was attempted.**
A lot of static endpoints were added, however they became parameterised later for pagination support. Many other parameterised endpoints were created. There is extensive linking between elements, so you could infinitly hop between pages checking the credits of a movie and hopping to a person and then looking for movies with that person etc. . Caching is done on all endpoints. New filtering options were added (namely filter on minimum rating & popularity). Sorting feature has been added to the popular people page and searching feature was added for movies. A new Watch List functionality was created. Various new MUI elements were used with new styles across the app. The app follows a responsive UI layout. For additional features pagination support was added to every relevant movie listing interface. Other additional feature is the layout chooser in the popular people page. You can choose either table listing or grid card listing. This feature has pagination support, therefore querystring support was added to handle and hold the current state of the view/layout. There are also many small improvements, which can be read in the following section, or even tiny details that doesn't worth to mention like a new favicon.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

 
1. **Favorites feature extended**
    - Extended to be able to remove a movie from the list from anywhere in the app by clicking at the heart icon again
2. **Watch List / To Watch feature**
    - User can add movies to the watch list
    - The icon reacts to the click, and disabled itself
    - Removal feature inside the watch list
3. **Movie Details**
    - Production Companies added as extra information
    - Provides link to similar movies (has stateful and parameterised version, explanation in next section)
    - Provides link to cast & credits
4. **Similar Movies**
    - Returns a list of similar movies to a specific movie
    - There are 2 ways to access similar movies (I did this for demonstrational purposes)
        - Stateful way: pass the specific movie in a state from the movie details (it will lead to /similar) it is not shareable
        - Parameterised way: pass the specific movie in the link through a parameter (it uses the movies/:id/similar link) it is shareable
5. **Discover Movies - HomePage**
    - Support was added for pagination (movies/discover/page/:page)
6. **Upcoming Movies**
    - Provides a list of upcoming movies
    - Pagination Support
7. **Trending Movies**
    - Provides a list of trending movies today
    - Pagination Support
8. **Playing Movies**
    - Provides a list of movies currently playing
    - Pagination Support
9. **Latest Movie**
    - Returns the latest added movie to the TMDB database
10. **Popular People List**
    - Sorting support for Name and Popularity sorting
        - Clicking on the blue table headings will result in sorting, it's responsive and will react to the click
    - Changable layout support
        - First/Default layout is a table listing
        - Second layout is a card grid layout with images
        - The layout is saved as a querystring, so it'll know how to show the other page properly when you switch between pages
    - The name of the person is clicable and will lead to the details of the person
    - Querystring support for storing the sate of the current view
    - Pagination Support
11. **Person Details**
    - Provides details about the given person (name, bio, image ... )
    - Has link/button to access other movies with the same person (Movie credits)
12. **Movies with a specific person**
    - Provides list of movies that the specified person can be found in!
13. **Caching Support**
    - The app has overall caching support for all features, so basically everything is cached (including parameterised links and pagination)
14. **Filtering**
    - The filter card was extended to provide 2 new filters
        - Minimum Rating filter: checks for movies with the specified rating or above
        - Popularity filter: checks for either all (default state), popular or hyped up movies
             - This feature checks the popularity number, the way it was implemented was through 3 options with radio forms using MUI, but:
             - Support was written to actually support a number input from the card out of the box, so passing the following values from the form are allowed: ["all","popular","hype",number], the code will handle it properly in all cases.
    - Responsive
15. **Sorting**
    - The popular people page has sorting feature where you can sort by name (alphabetically ascending and descending) or popularity (numerically ascending and descending)
    - Responsive
16. **Searching**
    - You can search for movies with a given name.
    - The search utilizes TMDBs querying to find the matching movies
    - Pagination Support for the results

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

There is no need to install other npm packages to run this application other than the ones required to run the original repository. No need to setup new things.

To run the app:
`npm start`

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Getting similar movies to a given one - `movie/${id}/similar`
+ Getting movies that are currently playing - `movie/now_playing`
+ Getting movies that are trending today - `trending/movie/day`
+ Getting upcoming movies - `movie/upcoming`
+ Getting credits for a movie - `movie/${id}/credits`
+ Getting the latest movie added to TMDB - `movie/latest`
+ Getting movie credits for a person - `person/${id}/movie_credits`
+ Getting a person - `person/${id}`
+ Getting popular people - `person/popular`
+ Searching for movies based on title - `search/movie&query=${title}`
+ Getting the movie credits for a person - `person/${id}/movie_credits`

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]
#### Movie routes
+ `/movies/discover` - Discover movies (same as home)
+ `/movies/discover/page/:page` - Discover movies with current page
+ `/movies/watchlist` - List of movies that contains the ones that the user wants to watch!
+ `/movies/upcoming` - Provides upcoming movies
+ `/movies/upcoming/page/:page` - Provides upcoming movies with current page
+ `/movies/trending/today` - Provides movies that are trending today
+ `/movies/trending/today/page/:page` - Provides movies that are trending today with current page
+ `/movies/playing` - Provides movies that are currently playing
+ `/movies/playing/page/:page` - Provides movies that are currently playing with current page
+ `/movies/latest` - Gives the latest movie added to TMDB
+ `/similar` OR `/similar/:id` OR `/movies/:id/similar` - Provides similar movies to the given one (stateful and parameterised)
+ `/movies/search` - Searches for movie based on title
+ `/movies/search/:title` - Result of movie search
+ `/movies/search/:title/page/:page` - Result of movie search with pagination support for the result
+ `/movies/:id/credits` - Provides credits for a movie
#### People routes
+ `/people/popular` - Provides list of popular people with sorting support with 2 layouts for listing
+ `/people/popular/page/:page` - Provides list of popular people (_||_) with pagination support
+ `/people/:id` - Provides details about a person
+ `/people/:id/credits/movie` - Provides movie credits for person

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

+ I used a simple way to sort data in the popular people list table. Source that helped me create it: https://www.selbekk.io/blog/creating-sortable-tables-with-react
+ TMDB API was used extensively: https://developer.themoviedb.org/reference/intro/getting-started
+ Material UI / MUI was used extensively: https://mui.com/material-ui/ 



