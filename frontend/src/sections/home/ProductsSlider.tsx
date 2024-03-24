import SectionHeading from "@/components/SectionHeading";
import Product from "@/components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { breakpointsForProducts } from "@/constants/swiper-breakpoints";
import { getCategoryProducts } from "@/apiCalls/products";
import { useCallback, useEffect, useState } from "react";
import { ProductType } from "@/types";
import { useNavigate } from "react-router-dom";

const ProductsSlider = ({ title, category }: { title: string, category: string }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<ProductType[]>([]);

    const fetchProducts = useCallback(async () => {
        const response = await getCategoryProducts(category);
        if (response?.status === 200) {
            setProducts(response.data);
        }
    }, [category]);

    const seeAllProducts = () => {
        navigate(`/category/${category}`);
    }

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    return (
        <div className="flex flex-col gap-[20px] my-4 relative">
            <SectionHeading
                text={title}
                showButton={true}
                onClick={seeAllProducts}
            />

            <div className="w-full relative">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={6}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    freeMode
                    breakpoints={breakpointsForProducts}
                >
                    {
                        products.map((product) => (
                            <SwiperSlide key={product._id}>
                                <Product product={product} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ProductsSlider;