import CartProduct from "@/components/CartProduct";
import { CartProductType } from "@/types";

const Products = ({ products }: { products: CartProductType[] }) => {
    return (
        <div className="w-full">
            {
                products.map((product, idx) => (
                    <CartProduct key={product.productId + idx} product={product} />
                ))
            }
        </div>
    );
};

export default Products;