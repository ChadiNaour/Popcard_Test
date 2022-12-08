import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';

function createData(Id, Profile, Number) {
  return { Id, Profile, Number };
}

const rows = [
  createData(1,'Entreprise 1', 159),
  createData(2,'Entreprise 2', 237),
  createData(3,'Entreprise 3', 262),
  createData(4,'Entreprise 4', 305),
  createData(5,'Entreprise 5', 356),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{borderRadius: "20px", width: "500px", padding: "20px", paddingTop: "10px"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{fontFamily: "Puplic_Sans",fontWeight: "bold"}}></TableCell>
            <TableCell align="center" style={{fontFamily: "Puplic_Sans",fontWeight: "bold", fontSize: "17px"}}>Profile</TableCell>
            <TableCell align="center" style={{fontFamily: "Puplic_Sans",fontWeight: "bold", fontSize: "17px"}}>Nb d'utilisateur</TableCell>
            <TableCell align="right" style={{fontFamily: "Puplic_Sans",fontWeight: "bold"}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{fontFamily: "Steradian_rg"}} component="th" scope="row">                      
                <div className='w-7 h-7 bg-primaryBrown rounded-full flex justify-center items-center text-white'>{row.Id}</div>
              </TableCell>
              <TableCell style={{fontFamily: "Steradian_rg", fontSize: "17px"}} align="center"><div className='flex flex-row justify-center items-center'><div className='w-7 h-7 bg-red-200 rounded-full mr-3'></div>{row.Profile}</div></TableCell>
              <TableCell style={{fontFamily: "Steradian_md", fontSize: "19px"}} align="center">{row.Number}</TableCell>
              <TableCell align='right'><Icon icon="ion:ellipsis-vertical-sharp" className="text-black h-7 w-7" /></TableCell>
            </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
        <div  className="w-full flex justify-center items-center my-4">
            <div className='bg-black rounded-full px-4 py-2'>

            <span className='text-white font-Puplic_Sans'>Charger Toutle La Liste</span>
            </div>
            </div>
    </TableContainer>
  );
}

