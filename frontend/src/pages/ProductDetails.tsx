import Container from "@/components/Container";
import ProductImages from "@/sections/product/ProductImages";
import ProductDescription from "@/sections/product/ProductDescription";

import "swiper/swiper-bundle.css";
import ProductsSlider from "@/sections/home/ProductsSlider";
import { useParams } from "react-router-dom";
import { getProductById } from "@/apiCalls/products";
import { useCallback, useEffect, useState } from "react";
import { ProductType } from "@/types";

const ProductDetails = () => {
    const [product, setProduct] = useState<ProductType>({} as ProductType);
    const params = useParams();
    const productId = params?.id || "";    

    const fetchProductDetails = useCallback(async () => {
        const resposne = await getProductById(productId);
        if (resposne?.status === 200) {
            setProduct(resposne.data);
        }
    }, [productId]);

    useEffect(() => {
        fetchProductDetails();
    }, [fetchProductDetails]);

    return (
        <Container className="flex flex-col gap-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="h-[550px]">
                        <ProductImages product={product} />
                    </div>

                    <div>
                        <ProductDescription product={product} />
                    </div>
                </div>

                <div>
                    <ProductsSlider title="Similar Products" category={product.category} />
                </div>
        </Container>
    );
};

export default ProductDetails;