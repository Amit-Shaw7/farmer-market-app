import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { IndianRupee } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useEffect, useState } from "react";
import { addItemToCart, removeItemFromCart } from "@/apiCalls/cart";
import { addToCartState } from "@/store/slices/cartSlice";

type ProductType = {
    _id: string;
    name: string;
    description: string;
    price: number;
    pictures: string[];
    stock: number;
    keyFeatures?: string[];
    category: string;
    sellerType: string;
    sellerId: string;
    unit?: string
};

interface ProductProps {
    product: ProductType
}


const Product = ({ product }: ProductProps) => {
    const { cart } = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();

    const [existInCart, setExistInCart] = useState(false);

    const checkExistInCart = () => {
        const exists = cart?.products?.find((p) => p.productId === product._id);
        console.log(Boolean(exists));
        
        if (exists) {
            setExistInCart(true);
        } else {
            setExistInCart(false);
        }
    };

    const addToCart = async () => {
        const response = await addItemToCart(product?._id);
        setExistInCart(true);
        if (response?.status === 200) {
            dispatch(addToCartState(response.data));
        }
    }

    const removeFromCart = async () => {
        setExistInCart(false);
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
        <Card className="min-w-[170px] max-h-[330px] md:max-h-[250px] flex flex-col justify-around p-2 rounded-md">
            <CardContent className="p-0 w-full flex flex-col gap-2">
                <Link
                    to={`/product/${product._id}`}
                    className="w-full flex items-center justify-center"
                >
                    <img
                        src={product.pictures[0]}
                        alt={product.name}
                        height={50}
                        width={50}
                        className="object-cover h-[200px] md:h-[120px] w-32"
                        loading="lazy"
                    />
                </Link>
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm">{product.name.slice(0, 10)}</h4>
                    <div className="flex gap-[2px]">
                        <p className="text-sm font-semibold">{product.price}</p>
                        <span className="text-[10px] font-medium self-end">{product?.unit ? "/ " : ""}</span>
                        <span className="text-[10px] font-medium self-end">{product?.unit}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex p-0 justify-between">
                <p className="text-price font-semibold flex items-center"><IndianRupee size={12} /> {product.price}</p>
                <Button
                    variant="outline"
                    onClick={handleCartAction}
                >
                    {existInCart ? "Remove" : "Add"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Product;



// 210382022975

// Prity@123