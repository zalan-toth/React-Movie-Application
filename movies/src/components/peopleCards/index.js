import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

const PeopleCards = (props) => {
    //<Person key={m.id} person={m} action={props.action} />
    let peopleCards = props.people.map((p) => (

        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardMedia
                    component="img"
                    height="200" // Adjust height as needed
                    image={`https://image.tmdb.org/t/p/w500${p.profile_path}`} // TMDB image URL
                    alt={`${p.name}'s profile picture`}
                />
                <CardContent>
                    <Typography variant="h6">
                        <Link to={`/people/${p.id}`}>{p.name}</Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Department: {p.known_for_department}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Popularity: {p.popularity}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Gender: {p.gender === 1 ? "Female" : p.gender === 2 ? "Male" : "Not specified"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Adult/Minor: {p.adult ? "Minor" : "Adult"}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ));
    return peopleCards;
};

export default PeopleCards;