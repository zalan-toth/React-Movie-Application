import React from "react";
import {getMovie, getSimilarMovies} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchIcon from "../components/cardIcons/addToWatch";
import ReviewForm from "../components/reviewForm";
import {useLocation} from "react-router-dom";

const SimilarMoviesPage = (props) => {


    const movieId = props.movieId;
    console.log("Movie ID:", movieId);

    // fetching the details of the movie
    const { data: movie, error: movieError, isLoading: isTheMovieLoading, isError: isThereMovieError } = useQuery(
        ["movie", { id: movieId }],
        () => getMovie(movieId)
    );

    // and now fetching the similar ones!
    const { data: similarMovies, error: similarMoviesError, isLoading: isTheSimilarMoviesLoading, isError: isThereSimilarMoviesError } = useQuery(
        ["similarMovies", { id: movieId }],
        () => getSimilarMovies(movieId)
    );



    if (isTheSimilarMoviesLoading || isTheMovieLoading) {
        return <Spinner />;
    }

    if (isThereMovieError) {
        return <h1>{movieError.message}</h1>;
    }
    if (isThereSimilarMoviesError) {
        return <h1>{similarMoviesError.message}</h1>;
    }


    return (
        <PageTemplate
            title="Similar Movies"
            movies={similarMovies.results}
            action={(movie) => {
                return <>
                    <AddToFavoritesIcon movie={movie} />
                    <AddToWatchIcon movie={movie} />
                </>
            }}
        />
    );
};
export default SimilarMoviesPage;