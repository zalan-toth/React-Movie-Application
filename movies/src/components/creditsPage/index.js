import React from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {getMovieCredits} from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default function CreditsPage({ movie }) {
    const { data , error, isLoading, isError } = useQuery(
        ["credits", { id: movie.id }],
        getMovieCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const credits = data.results;

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 550}} aria-label="reviews table">
                <TableHead>
                    <TableRow>
                        <TableCell >Author</TableCell>
                        <TableCell align="center">Excerpt</TableCell>
                        <TableCell align="right">More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {credits.map((c) => (
                        <TableRow key={c.id}>
                            <TableCell component="th" scope="row">
                                {c.name}
                            </TableCell>
                            <TableCell >{excerpt(c.department)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}