import {
  productCategoriesDealerCanSell,
  productCategoriesFarmerCanSell,
  productCategoriesForDealer,
  productCategoriesForFarmer,
  productCategoriesForShopkeeper,
  productCategoriesShopkeeperCanSell
} from "@/constants/product-categories";
import { CategoryType, User , AddressType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: User;
  isAuthenticated: boolean;
  productCategories: CategoryType[],
  productCategoriesWhichCanBeSold : CategoryType[]
}

const defaultAddress: AddressType = {
  address : "",
  pincode : "",
  state : "",
  city : ""
}

const defaultUser: User = {
  name: "",
  email: "",
  phone: "",
  role: "",
  businessDocument: "",
  shippingDetails: defaultAddress,
  isVerified: false,
  cartId: "",
  _id: "",
  avatar: "",
  createdAt: "",
  updatedAt: "",
}


const initialState: UserState = {
  user: defaultUser,
  isAuthenticated: false,
  productCategories: productCategoriesForShopkeeper,
  productCategoriesWhichCanBeSold : productCategoriesShopkeeperCanSell
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      if (state.user.role === "SHOPKEEPER") {
        state.productCategories = productCategoriesForShopkeeper;
        state.productCategoriesWhichCanBeSold = productCategoriesShopkeeperCanSell;
      } else if (state.user.role === "FARMER") {
        state.productCategories = productCategoriesForFarmer;
        state.productCategoriesWhichCanBeSold = productCategoriesFarmerCanSell;
      } else if (state.user.role === "DEALER") {
        state.productCategories = productCategoriesForDealer;
        state.productCategoriesWhichCanBeSold = productCategoriesDealerCanSell;
      }
    },
    loginFailure: (state) => {
      state.user = defaultUser;
      state.isAuthenticated = false;
      state.productCategories = productCategoriesForShopkeeper;
      state.productCategoriesWhichCanBeSold = []
    },

    logoutSuccess: (state) => {
      state.user = defaultUser;
      state.isAuthenticated = false;
      state.productCategories = productCategoriesForShopkeeper;
      state.productCategoriesWhichCanBeSold = [];
    },
    setAddress: (state, action) => {
      state.user.shippingDetails = action.payload;
    }
  },
});

export const { loginSuccess, loginFailure, logoutSuccess , setAddress} = user.actions;
export default user.reducer;