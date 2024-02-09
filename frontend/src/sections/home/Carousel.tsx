import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import Image from "next/image";

const HomeCarousel = () => {
    return (
        <div>
            <Carousel className="mt-10">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="flex items-center justify-center">
                                <Image
                                    src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                                    alt=""
                                    height={200}
                                    width={1000}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-8" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-8" />
            </Carousel>
        </div>
    );
};

export default HomeCarousel;