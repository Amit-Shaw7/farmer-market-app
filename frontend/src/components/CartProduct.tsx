import { dummy } from "@/development/dummy";
import { CartProductType } from "@/types";
import { IndianRupee, Minus, Plus } from "lucide-react";
import {Link} from "react-router-dom";

const CartProduct = ({ product }: { product: CartProductType }) => {
    return (
        <div className="w-full flex items-center justify-between">
            <div key={product.productId} className="flex gap-5 items-start">
                <Link to={`/product/${product.productId}`}>
                    <img
                        src={dummy}
                        alt={product.name}
                        width={70}
                        height={70}
                        className="object-cover h-[70px] w-[70px]"
                    />
                </Link>
                <div className="w-[100px]">
                    <p>{product.name}</p>
                    <div>
                        <p className="text-price font-semibold flex items-center"><IndianRupee size={12} /> {product.price}</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-[60px] rounded-md p-1 flex items-center justify-center bg-primary gap-1">
                    <div>
                        <Plus size={18} color="#ffffff" />
                    </div>
                    <p className="font-semibold text-sm text-white">1</p>
                    <div>
                        <Minus size={18} color="#ffffff" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;