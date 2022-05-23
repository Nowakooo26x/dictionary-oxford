import * as React from 'react';

import dictionary from './dictionary.json'

import TableComponent from './components/organisms/TableComponent';
import Layout from './components/organisms/Layout';

function TableDictionary() {

  return (
    <Layout>
      <TableComponent rows={dictionary}/>
    </Layout>
  );
}

export default TableDictionary;
