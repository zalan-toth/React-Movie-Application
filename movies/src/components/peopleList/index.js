import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid2";

const PeopleList = (props) => {
    //<Person key={m.id} person={m} action={props.action} />
    let peopleCards = props.people.map((m) => (
        <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
            <p>Hello</p>
        </Grid>
    ));
    return peopleCards;
};

export default PeopleList;