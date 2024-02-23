"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";

const HomeCarousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                modules={[Navigation, Thumbs , Pagination]}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                            alt=""
                            height={500}
                            width={1000}
                            className="object-cover h-[500px] w-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeCarousel;