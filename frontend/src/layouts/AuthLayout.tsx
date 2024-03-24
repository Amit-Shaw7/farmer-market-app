import { fetchUser } from "@/apiCalls/user";
import BrandName from "@/components/BrandName";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { AppDispatch } from "@/store/Store";
import { loginSuccess } from "@/store/slices/userSlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const checkLogin = useCallback(async () => {
    const response = await fetchUser();
    if (response?.status === 200) {
      dispatch(loginSuccess(response.data));
      navigate("/")
    }
  }, [navigate, dispatch]);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <div>

      <div>
        <div className="mt-2 ml-2 flex items-center gap-4 w-max">
          <Logo />
          <BrandName />
        </div>

        <Container className="mt-8">
          <Outlet />
        </Container>

        <Footer />
      </div>

    </div>
  );
};

export default AuthLayout;