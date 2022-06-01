import Layout from './components/organisms/Layout';
import { useSelector, useDispatch } from 'react-redux'

import { setRandomWords } from './redux/features/dictionary/dictionarySlice'

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import TableComponent from './components/organisms/TableComponent'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

function TableWordsRandom() {
    const dispatch = useDispatch()
    const randomWords = useSelector((state) => state.dictionary.randomWords)

    useEffect(() => {

      handleClick()

    }, []);

    const handleClick = () =>
    {
      dispatch(setRandomWords(15))
    }
    

  return (
    <Layout>
      <Stack>
        <Typography variant="h6" component="h1">Random 15 words</Typography>
        <Button onClick={handleClick} variant="outlined">Generate words</Button>
      </Stack>
      <TableComponent rows={randomWords}/>
    </Layout>
  );
}

export default TableWordsRandom;
