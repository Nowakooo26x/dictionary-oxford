import { createSlice } from '@reduxjs/toolkit'
import dictionary from '../../../dictionary.json'

const initialState = {
  words: dictionary,
  sortWords: [],
  displayLetter: "",
  displayLevel: {
    a1: true,
    a2: true,
    b1: true,
    b2: true,
    c1: true,
  },
}

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setSortWords: (state, action) => {
      state.sortWords = action.payload
    },
    changeStateLevel: (state, action) => {
      state.displayLevel[action.payload] = !state.displayLevel[action.payload]
    },
    setLetter: (state, action) => {
      state.displayLetter = action.payload
    },
  },
})

export const { setSortWords, changeStateLevel, setLetter } = dictionarySlice.actions

export default dictionarySlice.reducer