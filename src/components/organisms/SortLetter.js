import React, { useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux'
import { setLetter, setSortWords } from '../../redux/features/dictionary/dictionarySlice'
import getArrayWithChakedLevel from '../../utils/getArrayWithChakedLevel'

function SortLetter () {

    const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const displayLetter = useSelector((state) => state.dictionary.displayLetter)
    const displayLevel = useSelector((state) => state.dictionary.displayLevel)
    const words = useSelector((state) => state.dictionary.words)
    const sortWords = useSelector((state) => state.dictionary.sortWords)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const array = getArrayWithChakedLevel(words, displayLevel)
        dispatch(setSortWords(array))

        dispatch(setLetter(event.target.value));
    };

    useEffect(() => {
        if(displayLetter !== ""){
            let array = sortWords.filter(item => (item.english[0] === displayLetter.toLowerCase()))
            dispatch(setSortWords(array));
        }
      }, [displayLetter]);


    return (
    <>
        <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Letter</InputLabel>
                <Select
                value={displayLetter}
                label="Letter"
                onChange={handleChange}
                    >
                    <MenuItem value=""><i>none</i></MenuItem>
                    {letter.map((item)=>(
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    </>
    );
}

export default SortLetter;