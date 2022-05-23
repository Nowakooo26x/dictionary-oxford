import { createSlice } from '@reduxjs/toolkit'
import dictionary from '../../../dictionary.json'

const initialState = {
  words: dictionary,
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
    changeStateLevel: (state, action) => {
      state.displayLevel[action.payload] = !state.displayLevel[action.payload]
    },
  },
})

export const { changeStateLevel } = dictionarySlice.actions

export default dictionarySlice.reducer