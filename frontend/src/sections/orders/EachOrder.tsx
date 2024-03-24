import { getProductById } from "@/apiCalls/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dummy } from "@/development/dummy";
import { OrderType, ProductType } from "@/types";
import { IndianRupee } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EachOrder = ({ order }: { order: OrderType }) => {
    return (
        <Card className="mt-5 shadow-none">
            <OrderHeader order={order} />
            {
                order.products.length !== 0
                &&
                <div>
                    {
                        order.products.map((product) => (
                            <OrderItems key={product} productId={product} />
                        ))
                    }
                    <DeliveryCharge charge={order?.deliveryCharge} />
                </div>
            }
            <OrderFooter order={order} />
        </Card>
    );
};

export default EachOrder;

const OrderHeader = ({ order }: { order: OrderType }) => {
    return (
        <div className="w-full flex items-center justify-between rounded-t-md bg-[#f0f2fe] p-3 text-[#6c6b72]">
            <div className="w-full flex">
                <div className="w-full flex gap-5 items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs leading-3 font-medium uppercase">Order Placed</span>
                        <span className="text-xs leading-3 text-black font-semibold">{order?.createdAt?.split("T")[0]}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-xs leading-3  font-medium uppercase">Order Status</span>
                        <span className="text-xs leading-3 text-black font-semibold self-end">{order?.orderStatus}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OrderItems = ({ productId }: { productId: string }) => {
    const [product, setProduct] = useState<ProductType>({} as ProductType);

    const fetchProductDetails = useCallback(async () => {
        const response = await getProductById(productId);
        if (response?.status === 200) {
            setProduct(response.data);
        }
    }, [productId]);

    useEffect(() => {
        fetchProductDetails();
    }, [fetchProductDetails]);

    return (
        <div className="p-3">
            <div className="flex gap-5 items-center">
                <Link to={`/product/`}>
                    <img
                        src={dummy}
                        alt="Name"
                        width={70}
                        height={70}
                        className="object-cover h-[70px] w-[70px]"
                    />
                </Link>
                <div className="w-full flex items-center justify-between">
                    <p>{product?.name}</p>
                    <div>
                        <p className="text-sm leading-3 font-semibold flex items-center"><IndianRupee size={14} /> {product?.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OrderFooter = ({ order }: { order: OrderType }) => {
    return (
        <div className="border-t p-3 flex items-center justify-between">
            <div className="">
                <div className="flex items-center flex-col gap-2">
                    <span className="leading-3 w-full text-xs font-semibold uppercase">Total</span>
                    <div className="leading-3 font-semibold flex items-center">
                        <IndianRupee size={12} />
                        <span>{order?.totalPrice + order?.deliveryCharge}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5 ">
                <Button
                    variant="ghost"
                    size="sm"
                >
                    Cancel
                </Button>

                <Button
                    size="sm"
                >
                    Buy Again
                </Button>
            </div>
        </div>
    );
};

const DeliveryCharge = ({ charge }: { charge: number }) => {
    return (
        <div className="p-3">
            <div className="flex gap-5 items-center">
                <div>
                    <img
                        src="/features/fast-delivery.svg"
                        alt="Fast Delivery"
                        width={70}
                        height={70}
                        className="object-cover h-[70px] w-[70px]"
                    />
                </div>
                <div className="w-full flex items-center justify-between">
                    <p>Delivery Charges</p>
                    <div className="flex items-center">
                        <p className="text-sm leading-3 font-semibold flex items-center">
                            <IndianRupee size={14} />
                            {charge}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};