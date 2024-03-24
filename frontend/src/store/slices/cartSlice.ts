import { CartProductType, CartType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    cart: CartType;
}
const defaultCartState = {
    _id: "",
    userId: "",
    products: [],
    totalPrice: 0,
    deliveryCharge: 0
};

const initialState: CartState = {
    cart: defaultCartState,
};

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartState: (state, action) => {            
            state.cart = action.payload;
        },
        initCartState: (state) => {
            state.cart = defaultCartState;
        },
        addToCartState: (state, action) => {
            console.log(action.payload);

            const exists = state.cart.products.find((item: CartProductType) => item.productId === action.payload._id);
            if (!exists) {
                state.cart.products = [...state.cart.products, action.payload];
                state.cart.totalPrice = state.cart.totalPrice + action.payload.price;
            } else {
                alert("Item already in cart");
            }
        },
        removeFromCartState: (state, action) => {
            state.cart.products = state.cart.products.filter((item: CartProductType) => item.productId !== action.payload._id);
            state.cart.totalPrice = state.cart.totalPrice - action.payload.price;
        }
    },
});

export const { setCartState, addToCartState, removeFromCartState, initCartState } = cart.actions;
export default cart.reducer;