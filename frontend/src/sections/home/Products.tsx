"use client";
import Carousel from "@/components/Slider";
import Heading from "@/components/Heading";
import { Product } from "@/components/Product";
import { products } from "@/constants";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

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
                    spaceBetween={15}
                    slidesPerView={7}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='mySwiper'
                    freeMode
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