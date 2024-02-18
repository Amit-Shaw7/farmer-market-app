import * as React from "react";

const dummy = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315"

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { IndianRupee } from "lucide-react";
import Link from "next/link";

type ProductType = {
    _id: string;
    name: string;
    description: string;
    price: number;
    pictures: string[];
    stock: number;
    keyFeatures?: string[];
    category: string;
    sellerType: string;
    sellerId: string;
};

interface ProductProps {
    product: ProductType
};


const Product = ({ product }: ProductProps) => {

    return (
        <Link href={`/product/${product._id}`}>
            <Card className="min-w-[170px] h-[270px] flex flex-col justify-around p-2 rounded-md">
                <CardContent className="p-0 w-full flex flex-col gap-2">
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src={dummy}
                            alt={product.name}
                            height={50}
                            width={50}
                            className="object-cover h-[120px] w-32"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm">{product.name.slice(0, 10)}</h4>
                        <p className="text-sm font-semibold">{product.price}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex p-0 justify-between">
                    <p className="text-price font-semibold flex items-center"><IndianRupee size={12} /> {product.price}</p>
                    <Button variant="outline">Buy</Button>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default Product;