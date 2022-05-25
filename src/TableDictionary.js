import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import TableComponent from './components/organisms/TableComponent';
import Layout from './components/organisms/Layout';
import Sort from './components/organisms/Sort'
import SortLetter from './components/organisms/SortLetter'

import { setLetter, setSortWords } from './redux/features/dictionary/dictionarySlice'

import getArrayWithChakedLevel from './utils/getArrayWithChakedLevel'

function TableDictionary() {
  const words = useSelector((state) => state.dictionary.words)
  const sortWords = useSelector((state) => state.dictionary.sortWords)
  const displayLevel = useSelector((state) => state.dictionary.displayLevel)
  const dispatch = useDispatch()
 
  useEffect(() => {
    const array = getArrayWithChakedLevel(words, displayLevel)
    dispatch(setSortWords(array))
    dispatch(setLetter(""))
}, [ displayLevel, words, dispatch]);

  return (
    <Layout>
      <Sort/>
      <SortLetter/>
      <TableComponent rows={sortWords}/>
    </Layout>
  );
}

export default TableDictionary;
