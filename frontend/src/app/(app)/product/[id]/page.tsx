"use client";
import React from "react";
import Container from "@/components/Container";
import { product } from "@/development/mocks/productDetails";
import Image from "next/image";
import ProductImages from "@/sections/product/ProductImages";
import ProductDescription from "@/sections/product/ProductDescription";
import "swiper/swiper-bundle.css"
import Products from "@/sections/home/Products";
import Wrapper from "@/components/Wrapper";

const ProductDetails = ({ params }: { params: { id: string } }) => {
    console.log(params.id);

    return (
        <Container className="flex flex-col gap-10">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="h-[550px]">
                        <ProductImages />
                    </div>

                    <div>
                        <ProductDescription />
                    </div>
                </div>

                <div>
                    <Products title="Similar Products" />
                </div>
            </Wrapper>
        </Container>
    );
};

export default ProductDetails;