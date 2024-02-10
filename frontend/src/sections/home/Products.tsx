"use client";
import Carousel from "@/components/Carousel";
import { Product } from "@/components/Product";
import { Button } from "@/components/ui/button";
import { products } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const Products = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col gap-8 my-10 relative">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <Button variant="link">See all</Button>
            </div>

            <div className="w-full px-5 relative">
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