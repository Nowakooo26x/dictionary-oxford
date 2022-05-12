import string from './dictionary.json'
import variables from './variables.json'

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Chip from '@mui/material/Chip';

function TableWordsRandom() {

    const [visible, setVisible] = useState(false);
    const [objWords, setObjWords] = useState([]);

    useEffect(() => {

      handleClick()

    }, []);

    const handleClick = () =>
    {
      let obj = []
        let array = []
        for(let i = 0; i<15; i++){
            let random = Math.floor(Math.random()*string.length+0)
            array.push(random)
            obj.push(string[random])

            setObjWords(obj)
        }
    }
    

  return (
    <div>
      
      <Stack>
        <Typography variant="h6" component="h1">Random 15 words</Typography>
        <Button onClick={handleClick} variant="outlined">Generate words</Button>
      </Stack>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>English</b></TableCell>
            <TableCell ><b>Type</b></TableCell>
            <TableCell ><b>Polish</b></TableCell>
            <TableCell align="right"><b>AudioUS</b></TableCell>
            <TableCell align="right"><b>AudioGB</b></TableCell>
            <TableCell align="right"><b>Level</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objWords.map((row) => (
            <TableRow key={row.english}>
              <TableCell ><a  href={`${variables.ServerOxford}${row.url_definition}`} target="_blank" rel="noreferrer">{row.english}</a></TableCell>
              <TableCell >{row.type}</TableCell>
              <TableCell > 
              <Chip
                  label={visible? row.polish : "translate"}
                  onClick={()=>{}}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default TableWordsRandom;
