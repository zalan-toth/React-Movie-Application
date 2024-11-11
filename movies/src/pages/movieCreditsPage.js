import React from "react";
import {useParams} from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import {getMovie} from "../api/tmdb-api";
import CreditsPage from "../components/creditsPage";

const MovieCreditsPage = (props) => {

    const { id } = useParams();
    const movie = getMovie(id)

    return (
        <PageTemplate movie={movie}>
            <CreditsPage movie={movie}/>
        </PageTemplate>
    );
};

export default MovieCreditsPage;