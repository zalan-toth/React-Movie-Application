import React from "react";
import {searchForMovies} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchIcon from "../components/cardIcons/addToWatch";
import {useParams} from "react-router-dom";

const SearchResultMoviesPage = (props) => {

    const { title } = useParams();
    console.log("Page Title value",title)
    const { data, error, isLoading, isError } = useQuery(
        ["searchResult", { title }],
        searchForMovies
    );


    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const resultMovies = data.results;

    // Redundant, but necessary to avoid app crashing.
    //const favorites = resultMovies.filter(m => m.favorite)
    //localStorage.setItem('favorites', JSON.stringify(favorites))
    //const addToFavorites = (movieId) => true

    return (
        <PageTemplate
            title="Search Result"
            movies={resultMovies}
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
export default SearchResultMoviesPage;