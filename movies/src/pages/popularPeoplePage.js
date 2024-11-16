import React from "react";
import {getPopularPeople} from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchIcon from "../components/cardIcons/addToWatch";

const PopularPeoplePage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('popularPeople', getPopularPeople)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const popularPeople = data.results;

    // Redundant, but necessary to avoid app crashing.
    //const favorites = playingMovies.filter(m => m.favorite)
    //localStorage.setItem('favorites', JSON.stringify(favorites))
    //const addToFavorites = (movieId) => true

    return (
        <PageTemplate
            title="People ordered by popularity"
            people={popularPeople}
        />
    );
};
export default PopularPeoplePage;