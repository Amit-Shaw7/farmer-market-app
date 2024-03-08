import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: User;
  isAuthenticated: boolean;
}

const defaultUser: User = {
  name: "",
  email: "",
  phone: "",
  role: "",
  businessDocument: "",
  shippingDetails: "",
  isVerified: false,
  cartId: "",
  _id: "",
  avatar: "",
}

const initialState: UserState = {
  user: defaultUser,
  isAuthenticated: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("payload", action.payload);
      
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginFailure: (state) => {
      state.user = defaultUser;
      state.isAuthenticated = false;
    },

    logoutSuccess: (state) => {
      state.user = defaultUser;
      state.isAuthenticated = false;
    }
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = user.actions;
export default user.reducer;