import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/userSlice";

export const store = configureStore({
    reducer: {
        userSlice
    },
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch