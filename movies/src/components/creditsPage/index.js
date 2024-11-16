import React from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import {getMovieCredits} from "../../api/tmdb-api";
import {Link} from "react-router-dom";

export default function CreditsPage({ movieId }) {
    const { data , error, isLoading, isError } = useQuery(
        ["credits", { id: movieId }],
        getMovieCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const credits = data.cast;

    return (
        <div>
            {credits.map((c) => (
                <Link to={`/people/${c.id}`}>{c.name}<br/><br/></Link>
            ))}
        </div>
    );
}