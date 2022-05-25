import React, { useState } from 'react';

import variables from '../../variables.json'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Chip from '@mui/material/Chip';

import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function TableComponent( { rows }) {

  const columns = [
    { id: '0', label: 'English', minWidth: 120, align: "left" },
    { id: '1', label: 'Type', minWidth: 120, align: "left" },
    { id: '2', label: 'Polish', minWidth: 120, align: "left" },
    { id: '3', label: 'AudioUS', minWidth: 120, align: "right" },
    { id: '4', label: 'AudioGB', minWidth: 120, align: "right"},
    { id: '5', label: 'Level', minWidth: 100, align: "right"}
  ]

  const [visible, setVisible] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return ( 
      <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <b>{column.label}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.url_definition}>
                      <TableCell>
                      <a  href={`${variables.ServerOxford}${row.url_definition}`} target="_blank" rel="noreferrer">{row.english}</a>
                      </TableCell>
                      <TableCell>
                        {row.type}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={visible? row.polish : "translate"}
                          onDelete={()=>{setVisible(!visible)}}
                          onClick={()=>{setVisible(!visible)}}
                          deleteIcon={visible? <VisibilityOffIcon /> : <VisibilityIcon/>}
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <AudiotrackIcon onClick={() => { new Audio(`${variables.ServerOxford}${row.url_audion_1}`).play()}}/>
                        <audio hidden>
                            <source src={`${variables.ServerOxford}${row.url_audion_1}`} type="audio/mpeg"/>
                            Not support.
                        </audio>
                      </TableCell>
                      <TableCell align="right">
                      <AudiotrackIcon onClick={() => { new Audio(`${variables.ServerOxford}${row.url_audion_2}`).play()}}/>
                        <audio hidden>
                          <source src={`${variables.ServerOxford}${row.url_audion_1}`} type="audio/mpeg"/>
                          Not support.
                      </audio>
                      </TableCell>
                      <TableCell align="right">{row.level.toUpperCase()}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </div>
    );
}

export default TableComponent;