"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div
            onClick={scrollToTop}
            className='fixed top-[90vh] right-[5vh] z-10'
        >
            <button className='p-3 flex items-center justify-center bg-primary text-white rounded-full'>
                <ArrowUp className="font-semibold" />
            </button>
        </div>
    )
}

export default ScrollToTop