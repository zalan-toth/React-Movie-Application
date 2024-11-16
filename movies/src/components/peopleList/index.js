import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const PeopleList = (props) => {
    //<Person key={m.id} person={m} action={props.action} />
    let peopleCards = props.people.map((p) => (
        <TableRow
            key={p.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {p.name}
            </TableCell>
            <TableCell align="right">{p.known_for_department}</TableCell>
            <TableCell align="right">{p.popularity}</TableCell>
            <TableCell align="right">{p.gender}</TableCell>
            <TableCell align="right">{p.adult}</TableCell>
        </TableRow>
    ));
    return peopleCards;
};

export default PeopleList;