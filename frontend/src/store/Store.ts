import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";
import appSlice from "./slices/appSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        product : productSlice,
        cart : cartSlice,
        order : orderSlice,
        app : appSlice
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;