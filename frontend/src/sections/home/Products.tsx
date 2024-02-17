"use client";
import Carousel from "@/components/Carousel";
import Heading from "@/components/Heading";
import { Product } from "@/components/Product";
import { products } from "@/constants";
import React from "react";

const Products = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col gap-[20px] my-12 relative">
            <Heading
                text={title}
                showButton={true}
                onClick={() => { }}
            />

            <div className="w-full relative">
                <Carousel>
                    {
                        products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Products;