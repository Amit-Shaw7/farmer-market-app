"use client";
import Container from "@/components/Container";
import Product from "@/components/Product";
import Tab from "@/components/tabs/Tab";
import Tabs from "@/components/tabs/Tabs";
import { products } from "@/constants";
import { productCategoriesForFarmer } from "@/constants/product-categories";
import { dummyPng } from "@/development/dummy";
import { useParams } from "next/navigation";
import React from "react";

const CategoryWiseProducts = () => {
    const params = useParams();
    return (
        <Container className="my-5">
            <div className="w-full grid grid-cols-12 gap-5">
                <div className="col-span-3 sm:col-span-2 md:col-span-3 h-[700px] overflow-y-scroll scrollbar-none">
                    <Tabs>
                        {
                            productCategoriesForFarmer.map((category) => (
                                <Tab
                                    key={category.name}
                                    href={`/category/${category.query}`}
                                    name={category.name}
                                    image={dummyPng}
                                    selected={params.category === category.query}
                                />
                            ))
                        }
                    </Tabs>
                </div>

                <div className="col-span-9 sm:col-span-10 md:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 h-[700px] overflow-y-scroll scrollbar-none">
                        {
                            products.map((product) => (
                                <Product
                                    key={product._id}
                                    product={product}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CategoryWiseProducts;