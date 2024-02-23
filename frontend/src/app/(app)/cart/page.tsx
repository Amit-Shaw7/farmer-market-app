import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cartProducts } from "@/development/mocks/cartProducts";
import CartProduct from "@/sections/cart/CartProduct";
import { IndianRupee, ReceiptIndianRupee, ReceiptText, Truck } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <Container className="py-10">
      <div className="p-4">
        <SectionHeading text="My Cart" />

        <div className="mt-5 flex flex-col gap-5">
          {
            cartProducts.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))
          }
        </div>

        <div className="mt-5 rounded-md border p-3 flex flex-col gap-2">
          <h6 className="text-lg font-semibold">Bill Details</h6>

          <div className="flex items-center gap-3">
            <ReceiptText size={16} />
            <div className="w-full flex items-center justify-between">
              <p className="text-sm">Item total </p>
              <p className="text-price font-semibold flex items-center"><IndianRupee size={12} />500</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Truck size={16} />
            <div className="w-full flex items-center justify-between">
              <p className="text-sm">Delivery charge </p>
              <p className="text-price font-semibold flex items-center"><IndianRupee size={12} />500</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-full flex items-center justify-between">
              <p className="font-semibold">Grand total</p>
              <p className="font-semibold flex items-center"><IndianRupee size={14} />500</p>
            </div>
          </div>
        </div>


        <Card className="p-3 mt-5 ">
          <CardContent className="m-0 p-0">
            <h6 className="text-lg font-semibold">Cancellation Policy</h6>
            <p className="text-muted-foreground text-sm">Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
          </CardContent>
        </Card>

        <div className="flex items-center mt-5">
          <Button
            size={"lg"}
            className="w-full h-[50px]"
          >
            BUY NOW
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;