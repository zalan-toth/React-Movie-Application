import React from "react";
import {getPlayingMovies} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchIcon from "../components/cardIcons/addToWatch";

const PlayingMoviesPage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('playing', getPlayingMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const playingMovies = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = playingMovies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    //const addToFavorites = (movieId) => true

    return (
        <PageTemplate
            title="Movies Now Playing"
            movies={playingMovies}
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
export default PlayingMoviesPage;