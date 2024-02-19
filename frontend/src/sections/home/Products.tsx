"use client";
import React from "react";
import Heading from "@/components/Heading";
import Product from "@/components/Product";
import { products } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { breakpointsForProducts } from "@/constants/swiper-breakpoints";

const Products = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col gap-[20px] my-12 relative">
            <Heading
                text={title}
                showButton={true}
                onClick={() => { }}
            />

            <div className="w-full relative">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={6}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
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

export default Products;