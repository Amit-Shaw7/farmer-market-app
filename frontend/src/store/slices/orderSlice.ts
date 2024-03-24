import { OrderType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface OrderState {
    orders: OrderType[];
}

const initialState: OrderState = {
    orders: [],
};

export const order = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderState: (state, action) => {
            state.orders = action.payload;
        },
    },
});

export const { setOrderState } = order.actions;
export default order.reducer;