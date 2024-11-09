import React from "react";
import {getTrendingTodayMovies} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchIcon from "../components/cardIcons/addToWatch";

const TrendingTodayMoviesPage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('trendingToday', getTrendingTodayMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const trendingTodayMovies = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = trendingTodayMovies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    //const addToFavorites = (movieId) => true

    return (
        <PageTemplate
            title="Movies Trending Today"
            movies={trendingTodayMovies}
            action={(movie) => {
                return (
                    <>
                        <AddToFavoritesIcon movie={movie} />
                        <AddToWatchIcon movie={movie} />
                    </>
                );
            }}
        />
    );
};
export default TrendingTodayMoviesPage;