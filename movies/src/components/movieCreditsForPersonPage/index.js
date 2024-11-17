import React from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import {getMovieCreditsForPerson} from "../../api/tmdb-api";
import {Link} from "react-router-dom";

export default function PersonMovieCreditsPage({ personId }) {
    const { data , error, isLoading, isError } = useQuery(
        ["personMovieCredits", { id: personId }],
        getMovieCreditsForPerson
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
                <Link to={`/movies/${c.id}`}>{c.title}<br/><br/></Link>
            ))}
        </div>
    );
}