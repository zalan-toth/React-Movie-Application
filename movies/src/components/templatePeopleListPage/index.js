import React, {useState} from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import PeopleList from "../peopleList";

function PeopleListPageTemplate({ people, title, action }) {

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
                </Grid>
                <PeopleList action={action} people={people}></PeopleList>
            </Grid>
        </Grid>
    );
}
export default PeopleListPageTemplate;