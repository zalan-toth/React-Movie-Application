import React, {useState} from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import PeopleList from "../peopleList";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

function PeopleListPageTemplate({ people, title, action }) {

    return (
        <Grid container>
            <Grid size={12}>
                <Header title={title} />
            </Grid>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Department</TableCell>
                            <TableCell align="right">Popularity</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Adult?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <PeopleList action={action} people={people}></PeopleList>

                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
export default PeopleListPageTemplate;