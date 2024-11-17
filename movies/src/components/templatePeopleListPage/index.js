import React, {useState} from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid2";
import PeopleList from "../peopleList";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Button from "@mui/material/Button";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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
                            <TableCell>
                                <Button color="secondary" onClick={() => handleSort('name')} size="large">Name<KeyboardDoubleArrowDownIcon color="primary" fontSize="medium" /></Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button color="secondary" size="large">Department</Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button color="secondary" onClick={() => handleSort('popularity')} size="large">Popularity<KeyboardDoubleArrowDownIcon color="primary" fontSize="medium" /></Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button color="secondary" size="large">Gender</Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button color="secondary" size="large">Adult</Button>
                            </TableCell>
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