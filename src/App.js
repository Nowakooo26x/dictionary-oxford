import { Routes, Route, Link } from "react-router-dom";

import TableDictionary from './TableDictionary'
import TableWordsRandom from './TableWordsRandom'

function App() {

  return (
      <Routes>
        <Route path="/dictionary-oxford" element={<TableDictionary/>} />
        <Route path="/dictionary-oxford/random" element={<TableWordsRandom/>} />
      </Routes>
  );
}

export default App;
