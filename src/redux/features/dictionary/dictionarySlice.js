import { createSlice } from '@reduxjs/toolkit'
import dictionary from '../../../dictionary.json'

const initialState = {
  words: dictionary,
  sortWords: [],
  randomWords: [],
  displayLetter: "",
  displayLevel: {
    a1: true,
    a2: true,
    b1: true,
    b2: true,
    c1: true,
  },
  visibleList: []
}

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setSortWords: (state, action) => {
      state.sortWords = action.payload
    },
    setRandomWords: (state, action) => {
      let arrayRandomWords = []
        for(let i = 0; i<action.payload; i++){
            let randomNumer = Math.floor(Math.random()*dictionary.length+0)
            arrayRandomWords.push({...dictionary[randomNumer], visible: false })
        }
      state.randomWords = arrayRandomWords;
    },
    addVisible: (state, action) => {
      state.visibleList.push(action.payload)
    },
    removeVisible: (state, action) => {
      state.visibleList = state.visibleList.filter( (item) => item !== action.payload)
      
    },
    changeStateLevel: (state, action) => {
      state.displayLevel[action.payload] = !state.displayLevel[action.payload]
    },
    setLetter: (state, action) => {
      state.displayLetter = action.payload
    },
  },
})

export const { setSortWords, setRandomWords, changeVisible, addVisible, removeVisible, changeStateLevel, setLetter } = dictionarySlice.actions

export default dictionarySlice.reducer