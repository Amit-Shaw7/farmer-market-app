"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";
import { product } from "@/development/mocks/productDetails";
import { swiperResponisveBreakpointsForProductImagesGroup } from "@/constants";
import { Swiper as SwiperType } from "swiper/types";

const ProductImages = () => {
    const [thumbsSwiper, setThumbsSwiper]: any = React.useState(null);

    return (
        <div className="flex flex-col gap-10 sm:gap-5">
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper2"
                    centeredSlides={true}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {
                        product.pictures.map((picture, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    width={600}
                                    height={300}
                                    className="h-[450px] lg:h-[450px] w-full object-cover md:object-contain"
                                    src={picture}
                                    alt={product.name}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={6}
                    onSlideChange={() => console.log("slide change")}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper product-images-group"
                    freeMode
                    onSwiper={(swiper) => setThumbsSwiper(swiper)}
                    breakpoints={swiperResponisveBreakpointsForProductImagesGroup}
                >
                    {
                        product.pictures.map((picture, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    width={100}
                                    height={100}
                                    className="w-[80px] md:w-[100px] object-cover md:object-contain"
                                    src={picture}
                                    alt={product.name}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ProductImages;