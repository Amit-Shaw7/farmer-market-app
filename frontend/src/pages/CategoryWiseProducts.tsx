import Container from "@/components/Container";
import Product from "@/components/Product";
import Tab from "@/components/tabs/Tab";
import Tabs from "@/components/tabs/Tabs";
import { dummyPng } from "@/development/dummy";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useCallback, useEffect, useState } from "react";
import { getCategoryProducts } from "@/apiCalls/products";
import { ProductType } from "@/types";

const CategoryWiseProducts = () => {
    const { productCategories } = useSelector((state: RootState) => state.user);
    const params = useParams();
    const category = params?.category || "";

    const [products, setProducts] = useState<ProductType[]>([]);

    const fetchProducts = useCallback(async () => {
        const response = await getCategoryProducts(category);
        if (response?.status === 200) {
            setProducts(response.data);
        }
    }, [category]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Container>
                <div className="w-full grid grid-cols-12 gap-5 my-3">
                    <div className="col-span-4 sm:col-span-2 md:col-span-3">
                        <Tabs>
                            {
                                productCategories.map((category) => (
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

                    <div className="col-span-8 sm:col-span-10 md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-h-[700px] overflow-y-scroll scrollbar-none">
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