import { configureStore } from "@reduxjs/toolkit"
import resultReducer from "./slices/resultSlice"
import resultLoadingReducer from "./slices/resultLoadingSlice"

export const store = configureStore({
    reducer: {
        result: resultReducer,
        resultLoading: resultLoadingReducer

    }
})