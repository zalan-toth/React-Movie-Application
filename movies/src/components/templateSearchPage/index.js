import React from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import SearchForm from "../searchForm";
import SearchCard from "../searchCard";

function TemplateSearchPage({ movies, action }) {

    if (movies===undefined){
        movies=[];
    }
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
                    <SearchCard/>
                </Grid>
                <MovieList action={action} movies={movies}></MovieList>
            </Grid>
        </Grid>
    );
}
export default TemplateSearchPage;
//<MovieList action={action} movies={displayedMovies}></MovieList>