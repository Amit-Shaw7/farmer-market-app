import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        // reference reducers here
    }
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch