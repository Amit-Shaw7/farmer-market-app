"use client";
import React from "react";
import Container from "@/components/Container";
import { product } from "@/development/mocks/productDetails";
import Image from "next/image";
import ProductImages from "@/sections/productDetails/ProductImages";
import ProductDescription from "@/sections/productDetails/ProductDescription";
import "swiper/swiper-bundle.css"
import Products from "@/sections/home/Products";

const ProductDetails = ({ params }: { params: { id: string } }) => {
    console.log(params.id);

    return (
        <Container className="flex flex-col gap-10">
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <ProductImages />
                </div>

                <div>
                    <ProductDescription />
                </div>
            </div>

            <div>
                <Products title="Similar Products" />
            </div>
        </Container>
    );
};

export default ProductDetails;