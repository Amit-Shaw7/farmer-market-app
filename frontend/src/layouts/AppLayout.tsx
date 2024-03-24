import { getCart } from "@/apiCalls/cart";
import { fetchUser } from "@/apiCalls/user";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppDispatch, RootState } from "@/store/Store";
import { mountApp } from "@/store/slices/appSlice";
import { setCartState } from "@/store/slices/cartSlice";
import { loginSuccess } from "@/store/slices/userSlice";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const checkLogin = useCallback(async () => {
    const response = await fetchUser();
    if (response?.status === 200) {
      dispatch(loginSuccess(response.data));
      const cartResponse = await getCart();
      if (cartResponse?.status === 200) {
        dispatch(setCartState(cartResponse.data));
      }
    }
    dispatch(mountApp());

  }, [dispatch]);

  useEffect(() => {
    !isAuthenticated && checkLogin();
  }, [checkLogin, isAuthenticated]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;