import { addItemToCart, removeItemFromCart } from "@/apiCalls/cart";
import OurFeatures from "@/components/OurFeatures";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/Store";
import { addToCartState } from "@/store/slices/cartSlice";
import { ProductType } from "@/types";
import { CheckCircle, IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const ProductDescription = ({ product }: { product: ProductType }) => {
    /**
     * Renders the product description component.
     *
     * @return {JSX.Element} The product description component
     */


    const { cart } = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();

    const [existInCart, setExistInCart] = useState(false);

    const checkExistInCart = () => {
        const exists = cart?.products?.find((p) => p.productId === product._id);
        if (exists) {
            setExistInCart(true);
        } else {
            setExistInCart(false);
        }
    };

    const addToCart = async () => {
        const response = await addItemToCart(product?._id);
        if (response?.status === 200) {
            dispatch(addToCartState(response.data));
        }
    }

    const removeFromCart = async () => {
        const response = await removeItemFromCart(product?._id);
        if (response?.status === 200) {
            dispatch(addToCartState(product?._id));
        }
    }

    const handleCartAction = () => {
        if (existInCart) {
            removeFromCart();
        } else {
            addToCart();
        }
    }

    useEffect(() => {
        cart?.products && checkExistInCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart?.products]);

    return (
        <div className="mt-5 p-2 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-medium">{product.name}</h1>
                <p className="text-md text-muted-foreground">{product.description}</p>
            </div>

            <div className="flex gap-2 items-start ">
                <IndianRupee size={14} className="items-start" />
                <div className="flex gap-[2px]">
                    <h2 className="text-xl leading-5 font-medium ">{product.price}</h2>
                    <span className="text-xs font-medium self-end">{product?.unit ? "/ " : ""}</span>
                    <span className="text-xs font-medium self-end">{product?.unit}</span>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {
                    product?.keyFeatures && product?.keyFeatures.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                            <CheckCircle color="green" />
                            <h3 className="text-lg font-medium">{feature}</h3>
                        </div>
                    ))
                }
            </div>

            <div>
                <span className="font-medium">Sold by - </span>
                <span className="text-muted-foreground">ABC GROUP</span>
            </div>

            <div>
                <Button
                    onClick={handleCartAction}
                >
                    {existInCart ? "Remove from cart" : "Add to cart"}
                </Button>
            </div>

            <OurFeatures />
        </div>
    );
};

export default ProductDescription;