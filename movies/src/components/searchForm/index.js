import React, { useState, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ }) => {
    const [title, setTitle] = useState("");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const defaultValues = {
        title: ""
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm(defaultValues);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSnackClose = (event) => {
        setOpen(false);
        navigate("/movies");
    };
    const onSubmit = (movieData) => {
        movieData.title = title;
        console.log(movieData);
        //context.addReview(movie, review);
        setOpen(true);
    };

    return (
        <Box component="div">
            <Typography component="h2" variant="h3">
                Search
            </Typography>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={handleSnackClose}
            >
                <MuiAlert
                    severity="success"
                    variant="filled"
                    onClose={handleSnackClose}
                >
                    <Typography variant="h4">
                        Search
                    </Typography>
                </MuiAlert>
            </Snackbar>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            sx={{ width: "40ch" }}
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={onChange}
                            value={value}
                            id="title"
                            label="Movie title"
                            name="title"
                            autoFocus
                        />
                    )}
                />
                {errors.author && (
                    <Typography variant="h6" component="p">
                        {errors.author.message}
                    </Typography>
                )}

                <Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Search
                    </Button>
                    <Button
                        type="reset"
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            reset({
                                title: "",
                                content: "",
                            });
                        }}
                    >
                        Reset
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default SearchForm;