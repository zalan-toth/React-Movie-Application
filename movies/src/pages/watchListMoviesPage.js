import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import AddToWatchIcon from "../components/cardIcons/addToWatch";
import AddToFavorites from "../components/cardIcons/addToFavorites";
import RemoveFromToWatchIcon from "../components/cardIcons/removeFromToWatch";
import RemoveFromToWatch from "../components/cardIcons/removeFromToWatch";

const WatchListMoviesPage = () => {
    const {favorites: movieIds } = useContext(MoviesContext);

    // Create an array of queries and run in parallel.
    const favoriteMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", { id: movieId }],
                queryFn: getMovie,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const movies = favoriteMovieQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });

    //const toDo = () => true;

    return (
        <PageTemplate
            title="Movies To Watch!"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <AddToFavorites movie={movie} />
                        <RemoveFromToWatch movie={movie} />
                        <WriteReview movie={movie} />
                    </>
                );
            }}
        />
    );
};

export default WatchListMoviesPage;