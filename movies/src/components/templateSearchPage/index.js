import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import MovieSearchPage from "../../pages/movieSearchPage";
import SearchForm from "../searchForm";

function TemplateSearchPage({ }) {

    return (
        <Grid container>
            <Grid size={12}>
                <Header title="Search" />
            </Grid>
            <Grid container sx={{flex: "1 1 500px"}}>
                <Grid
                    key="find"
                    size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}}
                    sx={{padding: "20px"}}
                >
                    <SearchForm/>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default TemplateSearchPage;
//<MovieList action={action} movies={displayedMovies}></MovieList>