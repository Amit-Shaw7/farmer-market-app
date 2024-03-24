import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mounted: false,
};

export const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        mountApp: (state) => {
            state.mounted = true;
        },
    },
});

export const { mountApp } = app.actions;
export default app.reducer;