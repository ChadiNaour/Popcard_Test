import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import Default_User from "../../images/Default_User.png";

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#FFEDDA',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#4E3131",
  },
}));

export default function BasicTable({ headProps, data, ellipsis }) {
    function createData(Id, logo, name, total_active, total_collaborators, total_desactiver, total_onboarding) {
        return { Id, logo, name, total_active, total_collaborators, total_desactiver, total_onboarding};
    }

    function percentage(partialValue, totalValue) {
            return parseInt((100 * partialValue) / totalValue);
          }

    const rows = [];

    data.data.map((row, i) => {
        rows.push(createData(i + 1, row.logo, row.profile_name, row.total_active, row.total_collaborators, row.total_desactiver, row.total_onboarding));
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
                                <div className='flex flex-row items-center gap-3'><img className='w-5 h-5 object-fill' src={row.logo}/>{row.name}</div>
                            </TableCell>
                            <TableCell style={{ fontFamily: "Puplic_Sans", fontSize: "16px" }} align="center"><div className='flex flex-col gap-1'><span>{row.total_onboarding+ "/"+row.total_collaborators+" ("+percentage(row.total_onboarding,row.total_collaborators)+")%"}</span><BorderLinearProgress variant="determinate" value={percentage(row.total_onboarding,row.total_collaborators)} /></div></TableCell>
                            <TableCell style={{ fontFamily: "Puplic_Sans", fontSize: "16px" }} align="center"><div className='flex flex-col gap-1'><span>{row.total_active+ "/"+row.total_collaborators+" ("+percentage(row.total_active,row.total_collaborators)+")%"}</span><BorderLinearProgress variant="determinate" value={percentage(row.total_active,row.total_collaborators)} /></div></TableCell>
                            <TableCell style={{ fontFamily: "Steradian_md", fontSize: "19px" }} align="center">{row.total_desactiver}</TableCell>
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