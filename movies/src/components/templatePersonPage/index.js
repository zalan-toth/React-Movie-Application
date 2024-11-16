import React from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";

const TemplatePersonPage = ({ person, children }) => {

    return (
        <>
                <Grid size={{xs: 9}}>
                    {children}
                </Grid>
        </>
    );
};

export default TemplatePersonPage;