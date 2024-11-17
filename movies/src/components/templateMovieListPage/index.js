import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function MovieListPageTemplate({ movies, title, action }) {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const [ratingFilter, setRatingFilter] = useState(0);
    const [popularityFilter, setPopularityFilter] = useState(0);
    const genreId = Number(genreFilter);
    const rating = Number(ratingFilter);
    const popularity = Number(popularityFilter);

    let displayedMovies = movies
        .filter((m) => {
            return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
            return m.vote_average >= rating;
        })
        .filter((m) => {
            return m.popularity >= popularity;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    console.log("Looking for minimum pop of",popularity)
    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else if (type === "rating") {
            setRatingFilter(value)
        } else if (type === "popularity") {
            if (typeof value === "number") {
                setPopularityFilter(value)
            } else if (typeof  value === "string"){
                if (value === "popular"){
                    setPopularityFilter(1000)
                } else if (value === "hype"){
                    setPopularityFilter(2000)
                } else {
                    setPopularityFilter(0)
                }
            }
        } else setGenreFilter(value);
    };

    return (
        <Grid container>
            <Grid size={12}>
                <Header title={title} />
            </Grid>
            <Grid container sx={{flex: "1 1 500px"}}>
                <Grid
                    key="find"
                    size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}}
                    sx={{padding: "20px"}}
                >
                    <FilterCard
                        onUserInput={handleChange}
                        titleFilter={nameFilter}
                        genreFilter={genreFilter}
                        ratingFilter={ratingFilter}
                    />
                </Grid>
                <MovieList action={action} movies={displayedMovies}></MovieList>
            </Grid>
        </Grid>
    );
}
export default MovieListPageTemplate;