import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Default_User from "../../images/Default_User.png";

export default function UsersStats({ headProps, data, ellipsis }) {
    function createData(Id, Fullname, Profile, Profile_picture, Total_Add, Total_Open) {
        return { Id, Fullname, Profile, Profile_picture, Total_Add, Total_Open };
    }

    const rows = [];

    data.data.map((row, i) => {
        rows.push(createData(i + 1, `${row.first_name} ${row.last_name}`, row.profile, row.profile_picture, row.total_add_to_contact, row.total_open));
    })

    return (
        <TableContainer component={Paper} sx={{ borderRadius: "20px", width: "auto", padding: "20px", paddingTop: "10px" }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontFamily: "Puplic_Sans", fontWeight: "bold" }}></TableCell>
                        {headProps.map((prop, index) => (
                            <TableCell key={index} align="center" style={{ fontFamily: "Puplic_Sans", fontWeight: "bold", fontSize: "17px", color: "#4E3131" }}>{prop}</TableCell>

                        ))
                        }
                        {ellipsis && <TableCell align="right" style={{ fontFamily: "Puplic_Sans", fontWeight: "bold" }}></TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(0, 4).map((row) => (
                        <TableRow
                            key={row.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={{ fontFamily: "Steradian_rg" }} component="th" scope="row">
                                <div className='w-7 h-7 bg-primaryBrown rounded-full flex justify-center items-center text-white'>{row.Id}</div>
                            </TableCell>
                            <TableCell style={{ fontFamily: "Steradian_rg", fontSize: "17px" }} align="left">
                                <div className='flex flex-row items-center gap-3'><img className='w-8 h-8 rounded-full object-fill' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />{row.Fullname}</div>
                            </TableCell>
                            <TableCell style={{ fontFamily: "Steradian_md", fontSize: "19px" }} align="center">{row.Total_Add}</TableCell>
                            <TableCell style={{ fontFamily: "Steradian_md", fontSize: "19px" }} align="center">{row.Total_Open}</TableCell>
                            <TableCell style={{ fontFamily: "Steradian_md", fontSize: "19px" }} align="center">{row.Profile}</TableCell>
                            {ellipsis && <TableCell align='right'><Icon icon="ion:ellipsis-vertical-sharp" className="text-black h-6 w-6" /></TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="w-full flex justify-center items-center my-4">
                <div className='bg-black rounded-full px-4 py-2'>

                    <span className='text-white font-Puplic_Sans'>Charger Toutle La Liste</span>
                </div>
            </div>
        </TableContainer>
    );
}