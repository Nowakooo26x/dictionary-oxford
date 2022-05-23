import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useSelector, useDispatch } from 'react-redux'
import { changeStateLevel } from '../../redux/features/dictionary/dictionarySlice'

 function Sort() {

  const displayLevel = useSelector((state) => state.dictionary.displayLevel)
  const dispatch = useDispatch()

     return (   
     <FormControl component="fieldset">
     <FormLabel component="legend">Level words</FormLabel>
     <FormGroup aria-label="position" row sx={{ mb: 2}}>
       <FormControlLabel
         value="top"
         control={<Checkbox defaultChecked checked={displayLevel.a1} />}
         onChange={() => {dispatch(changeStateLevel("a1"))}}
         label="A1"
         labelPlacement="top"
       />
       <FormControlLabel
         value="top"
         control={<Checkbox defaultChecked checked={displayLevel.a2} />}
         onChange={() => {dispatch(changeStateLevel("a2"))}}
         name="A2"
         label="A2"
         labelPlacement="top"
       />
       <FormControlLabel
         value="top"
         control={<Checkbox defaultChecked checked={displayLevel.b1} />}
         onChange={() => {dispatch(changeStateLevel("b1"))}}
         label="B1"
         labelPlacement="top"
       />
       <FormControlLabel
         value="top"
         control={<Checkbox defaultChecked checked={displayLevel.b2} />}
         onChange={() => {dispatch(changeStateLevel("b2"))}}
         label="B2"
         labelPlacement="top"
       />
       <FormControlLabel
         value="top"
         control={<Checkbox defaultChecked checked={displayLevel.c1} />}
         onChange={() => {dispatch(changeStateLevel("c1"))}}
         label="C1"
         labelPlacement="top"
       />
     </FormGroup>
   </FormControl>);
 }
 
 export default Sort;