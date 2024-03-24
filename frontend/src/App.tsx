import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const AppLayout = React.lazy(() => import("./layouts/AppLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Signup = React.lazy(() => import("./pages/auth/Signup"));
const ValidateOtp = React.lazy(() => import("./pages/auth/ValidateOtp"));
const Home = React.lazy(() => import("./pages/Home"));
const Search = React.lazy(() => import("./pages/Search"));
const Contact = React.lazy(() => import("./pages/Contact"));
const CategoryWiseProducts = React.lazy(() => import("./pages/CategoryWiseProducts"));
const Cart = React.lazy(() => import("./pages/Cart"));
const PaymentSuccess = React.lazy(() => import("./pages/PaymentSuccess"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const Account = React.lazy(() => import("./pages/Account"));
const ResetPassword = React.lazy(() => import("./pages/auth/ResetPassword"));
const Security = React.lazy(() => import("./pages/Security"));
const ForgetPassword = React.lazy(() => import("./pages/auth/ForgetPassword"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Address = React.lazy(() => import("./pages/Address"));
const Page404 = React.lazy(() => import("./pages/Page404"));
const Page403 = React.lazy(() => import("./pages/Page403"));
const Page500 = React.lazy(() => import("./pages/Page500"));

import Loading from "@/components/Loading";
import "swiper/swiper-bundle.css";
import ProtectRoute from "./components/ProtectRoute";
import Demo from "./development/Demo";
import AddProduct from "./pages/AddProduct";

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Publlic app routes */}
          <Route path="/" element={<AppLayout />}>

            <Route path="" element={<Home />} />

            {/* Protected app routes */}
            <Route path="" element={<ProtectRoute allowedRoles={["SHOPKEEPER", "FARMER", "DEALER"]} />}>
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Cart />} />
              <Route path="account" element={<Account />} />
              <Route path="account/security" element={<Security />} />
              <Route path="account/reset-password" element={<ResetPassword />} />
              <Route path="account/orders" element={<Orders />} />
              <Route path="account/address" element={<Address />} />
              <Route path="demo" element={<Demo />} />
            </Route>

            <Route path="" element={<ProtectRoute allowedRoles={["FARMER", "DEALER"]} />}>
              <Route path="product/add" element={<AddProduct />} />
            </Route>

            <Route path="s" element={<Search />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="category/:category" element={<CategoryWiseProducts />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>

          {/* Authentication routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="validate-otp/:userId" element={<ValidateOtp />} />
          </Route>

          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="order-success" element={<PaymentSuccess />} />

          <Route path="/forbidden" element={<Page403 />} />
          <Route path="/maintenance" element={<Page500 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
