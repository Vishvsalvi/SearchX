import { createSlice, createSelector } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: "result",
    initialState: [],
    reducers: {
        addResult: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const getResultSelector = createSelector(
    (state) => state.result,
    (state) => state
)
export const { addResult } = resultSlice.actions
export default resultSlice.reducer;