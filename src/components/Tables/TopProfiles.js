import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Default_User from "../../images/Default_User.png";

export default function TopProfiles({ headProps, data, ellipsis }) {
  function createData(Id, Profile, Number, Image) {
    return { Id, Profile, Number, Image };
  }

  const rows = [];

  data.data.map((row, i) => {
    rows.push(createData(i + 1, row.name, row.total_collaborators, row.logo));
  })
  // console.log(rows)

  return (
    <TableContainer component={Paper} sx={{ borderRadius: "20px", width: "auto", padding: "20px", paddingTop: "10px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: "Puplic_Sans", fontWeight: "bold" }}></TableCell>
            {headProps.map((prop, index) => (
              <TableCell key={index} align="center" style={{ fontFamily: "Puplic_Sans", fontWeight: "bold", fontSize: "18px", color: "#4E3131" }}>{prop}</TableCell>

            ))
            }
            {ellipsis && <TableCell align="right" style={{ fontFamily: "Puplic_Sans", fontWeight: "bold" }}></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 5).map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ fontFamily: "Steradian_rg" }} component="th" scope="row">
                <div className='w-7 h-7 bg-primaryBrown rounded-full flex justify-center items-center text-white'>{row.Id}</div>
              </TableCell>
              <TableCell style={{ fontFamily: "Steradian_rg", fontSize: "17px" }} align="left">
                <div className='flex flex-row items-center gap-3'><img className='w-6 h-6 object-fill' src={row.Image ? row.Image : Default_User} />{row.Profile}</div>
              </TableCell>
              <TableCell style={{ fontFamily: "Steradian_md", fontSize: "19px" }} align="center">{row.Number}</TableCell>
              {ellipsis && <TableCell align='right'><Icon icon="ion:ellipsis-vertical-sharp" className="text-black h-6 w-6" /></TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full flex justify-center items-center my-3">
        <div className='bg-black rounded-full px-4 py-2'>

          <span className='text-white font-Puplic_Sans'>Charger Toutle La Liste</span>
        </div>
      </div>
    </TableContainer>
  );
}

