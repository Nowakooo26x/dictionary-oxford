import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import string from './result-all.json'

function TableDictionary() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>english</TableCell>
            {/*<TableCell >type</TableCell>
            <TableCell >level</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {string.map((row) => (
            <TableRow
              key={row.english}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.english}</TableCell>
              <TableCell >{row.type}</TableCell>
              {/*<TableCell >{row.type}</TableCell>
              <TableCell >{row.level}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDictionary;
