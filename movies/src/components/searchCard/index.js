import React from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import {FormControlLabel, FormLabel, InputAdornment, OutlinedInput, Radio, RadioGroup, Slider} from "@mui/material";
import SearchForm from "../searchForm";


export default function SearchCard() {

    const { data, error, isLoading, isError } = useQuery("genres", getGenres);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <Card
            sx={{
                backgroundColor: "rgb(204, 204, 0)"
            }}
            variant="outlined">
            <CardContent>
                <SearchForm></SearchForm>
            </CardContent>
        </Card>
    );
}