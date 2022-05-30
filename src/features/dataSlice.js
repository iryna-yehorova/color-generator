import { createSlice } from "@reduxjs/toolkit"
import * as dataApi from '../backend/dataApi'

const initialState = {
    colors: [],
    loading: false,
    historyColors: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setColors(state, action) {
            state.colors = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setHistoryColors(state, action) {
            state.historyColors.unshift(action.payload)
        }
    }
})

export const { setSelected, clearSelected, setColors, setLoading, setHistoryColors } = dataSlice.actions

export const getColors = (params) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await dataApi.getPalette(params)
        dispatch(setColors(res))
        dispatch(setHistoryColors(res))
    } catch(err) {
        throw new Error(err)
    } finally {
        dispatch(setLoading(false))
    }
};

export default dataSlice.reducer
