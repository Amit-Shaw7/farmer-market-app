import { ProductType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    searchText: string;
    products: ProductType[];
}

const initialState: ProductState = {
    searchText: "",
    products: [],
};

export const user = createSlice({
    name: "products",
    initialState,
    reducers: {

        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setSearchedProducts: (state, action) => {
            state.products = action.payload;
        }
    },
});

export const { setSearchedProducts, setSearchText } = user.actions;
export default user.reducer;