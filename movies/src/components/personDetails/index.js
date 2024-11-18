import React, { useState } from "react";
import {Link} from "react-router-dom";
import {Typography, Card, CardContent, Button, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ person }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const profileImageUrl = person.profile_path
        ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";
    return (
        <Card>
            <Grid container>

                <Grid item xs={12} sm={8}>
                    <CardContent>
                        <Typography variant="h4" component="h2" gutterBottom>
                            {person.name || "Unknown Person"}
                        </Typography>

                        <Box mb={3}>
                            <Typography variant="h6" component="h3">
                                Overview
                            </Typography>
                            <Typography variant="body1" component="p" color="text.secondary" mt={1}>
                                {person.biography || "No biography available for this person."}
                            </Typography>
                        </Box>

                        <Grid container spacing={2} alignItems="center">
                            {person.birthday && (
                                <Grid item>
                                    <Typography variant="body1">
                                        <strong>Born:</strong> {person.birthday}
                                    </Typography>
                                </Grid>
                            )}
                            {person.place_of_birth && (
                                <Grid item>
                                    <Typography variant="body1">
                                        <strong>Birthplace:</strong> {person.place_of_birth}
                                    </Typography>
                                </Grid>
                            )}
                            {person.deathday && (
                                <Grid item>
                                    <Typography variant="body1">
                                        <strong>Died:</strong> {person.deathday}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>

                        <Box mt={3}>
                            <Button
                                component={Link}
                                to={`/people/${person.id}/credits/movie`}
                                variant="contained"
                                color="primary"
                            >
                                Movie Credits
                            </Button>
                        </Box>

                    </CardContent>

                </Grid>
            </Grid>
        </Card>
    );
};
export default PersonDetails ;