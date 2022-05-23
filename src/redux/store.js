import { configureStore } from '@reduxjs/toolkit'
import dictionaryReducer from '../redux/features/dictionary/dictionarySlice'

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
})