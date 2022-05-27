import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../features/dataSlice'
import undoable from 'redux-undo'

export const store = configureStore({
    reducer: {
        data: undoable(dataSlice)
    }
})