import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid2";

const PeopleList = (props) => {
    let peopleCards = props.people.map((m) => (
        <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
            <Person key={m.id} movie={m} action={props.action} />
        </Grid>
    ));
    return movieCards;
};

export default PeopleList;