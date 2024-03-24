"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { breakpointsForProductImagesGroup } from "@/constants/swiper-breakpoints";
import { ProductType } from "@/types";
import { dummy } from "@/development/dummy";

const ProductImages = ({ product }: { product: ProductType }) => {
    const [thumbsSwiper, setThumbsSwiper]: any = React.useState(null);

    return (
        <div className="flex flex-col gap-10 sm:gap-5">
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper2"
                    centeredSlides={true}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {
                        product?.pictures?.map((picture, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    width={600}
                                    height={300}
                                    className="h-[450px] lg:h-[450px] w-full object-cover md:object-contain"
                                    src={picture || dummy}
                                    alt={product?.name}
                                    loading="lazy"
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
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper product-images-group"
                    freeMode
                    onSwiper={(swiper) => setThumbsSwiper(swiper)}
                    breakpoints={breakpointsForProductImagesGroup}
                >
                    {
                        product?.pictures?.map((picture, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    width={100}
                                    height={100}
                                    className="w-[80px] md:w-[100px] object-cover md:object-contain"
                                    src={picture}
                                    alt={product?.name}
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