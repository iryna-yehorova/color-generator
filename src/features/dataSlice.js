import { createSlice } from "@reduxjs/toolkit"
import * as dataApi from '../backend/dataApi'

const initialState = {
    colors: [],
    selected: null,
    loading: false
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        async getColors(state) {
            try {
                state.loading = true
                let params = ''

                if(state.selected && state.selected.length > 0) {
                    params = state.selected.slice(1)
                } else {
                    params = Math.floor(Math.random()*16777215).toString(16)
                }

                state.colors = await dataApi.getPalette(params)
            } catch(err) {
                throw new Error(err)
            } finally {
                state.loading = false
            }
        },
        getColor(state, action) {
            state.selected = action.payload
        },
        getRandomColor(state) {
            state.selected = ""
        }
    }
})

export const {} = dataSlice.actions

export default dataSlice.reducer