import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { initCartState } from "@/store/slices/cartSlice";
import Products from "@/sections/cart/Products";
import Billing from "@/sections/cart/Billing";
import CancellationPolicy from "@/sections/cart/CancellationPolicy";
import ShippingDetails from "@/sections/cart/ShippingDetails";
import PaymentMethod from "@/sections/cart/PaymentMethod";
import { useState } from "react";
import { createOrderWithCOD, createOrderWithRazorpay } from "@/apiCalls/order";
import { useNavigate } from "react-router-dom";
import PageHeading from "@/components/PageHeading";

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.user);

  const [paymentMethod, setPaymentMethod] = useState("ONLINE");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCreateOrder = async () => {
    if (paymentMethod === "COD") {
      await createCODOrder();
      return;
    } else {
      await createOnlineOrder();
      return;
    }
  }

  const createOnlineOrder = async () => {
    const response = await createOrderWithRazorpay(user , cart._id);
    if (response?.status === 200) {
      dispatch(initCartState());
    }
  };

  const createCODOrder = async () => {
    const response = await createOrderWithCOD();
    if (response?.status === 200) {
      dispatch(initCartState());
      navigate("/order-success?orderId=" + response.data._id);
    }
  }


  return (
    <Container className="py-5">
      <PageHeading text="My Cart" />

      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="mt-5 flex flex-col gap-5 w-full md:w-[calc(100%-350px)] lg:w-[calc(100%-450px)]">
          <Products products={cart?.products} />
        </div>


        <div className="w-full md:w-[350px] flex flex-col gap-2">
          <Billing cart={cart} />

          <CancellationPolicy />

          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

          <ShippingDetails user={user} />


          <Button
            size={"lg"}
            className="w-full h-[50px]"
            disabled={cart?.products.length === 0}
            onClick={handleCreateOrder}
          >
            Place Order
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;