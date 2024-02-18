import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
    children: React.ReactNode
};

const Carousel = ({ children }: CarouselProps) => {
    const moveRight = () => {
        let slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider?.scrollLeft + 1000;
        }
    };

    const moveLeft = () => {
        let slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider?.scrollLeft - 1000;
        }
    };

    return (
        <div id="slider" className="flex gap-4 overflow-x-scroll whitespace-nowrap scroll-smooth">
            {
                children
            }
            <Button
                onClick={moveLeft}
                className="rounded-full p-3 absolute -left-3 top-1/2 -translate-y-1/2 bg-white shadow-md">
                <ArrowLeft
                    size={15}
                    fontWeight="bold"
                    color="black"
                />
            </Button>

            <Button
                onClick={moveRight}
                className="rounded-full p-3 absolute -right-3 top-1/2 -translate-y-1/2 shadow-md bg-white hover:bg-slate-200 hover:shadow-lg hover:shadow-white">
                <ArrowRight
                    size={15}
                    fontWeight="bold"
                    color="black"
                />
            </Button>
        </div>
    );
};

export default Carousel;