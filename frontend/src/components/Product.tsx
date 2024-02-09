import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

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
}

interface ProductProps {
    product: ProductType
}


export function Product({ product }: ProductProps) {

    return (
        <Card className="w-[200px]">
            <CardContent>
                <Image
                    src={"https://source.unsplash.com/random/300×300"}
                    alt={product.name}
                    height={70}
                    width={50}
                    className="object-cover h-32 w-32"
                />
                <p>{product.name}</p>
                <p>{product.price}</p>

            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Buy</Button>
            </CardFooter>
        </Card>
    )
}
