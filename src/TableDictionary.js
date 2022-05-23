import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import dictionary from './dictionary.json'

import TableComponent from './components/organisms/TableComponent';
import Layout from './components/organisms/Layout';
import Sort from './components/organisms/Sort'

function TableDictionary() {
  const words = useSelector((state) => state.dictionary.words)
  const displayLevel = useSelector((state) => state.dictionary.displayLevel)

  const boolState = ( item, level ) => {
    if((item.level === level) && displayLevel[level]){
      return true;
    }else{
      return false;
    }
  }
 
  const array = words.filter(word => ( 
    boolState(word, "a1") ||
    boolState(word, "a2") ||
    boolState(word, "b1") ||
    boolState(word, "b2") ||
    boolState(word, "c1")
  ));

  console.log(array)
  return (
    <Layout>
      <Sort/>
      <TableComponent rows={array}/>
    </Layout>
  );
}

export default TableDictionary;
