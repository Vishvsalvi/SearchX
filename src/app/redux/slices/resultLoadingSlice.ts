import { createSlice, createSelector } from "@reduxjs/toolkit";

const resultLoadingSlice = createSlice({
    name: "resultLoading",
    initialState: false,
    reducers: {
        setResultLoading: (state, action) => {
            return action.payload;
        }
    }
})

export const getResultLoadingSelector = createSelector(
    (state) => state.resultLoading,
    (state) => state
)
export const { setResultLoading } = resultLoadingSlice.actions
export default resultLoadingSlice.reducer;