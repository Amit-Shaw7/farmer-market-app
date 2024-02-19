import { Button } from "@/components/ui/button";
import { dummy } from "@/development/dummy";
import { ProductType } from "@/types";
import { IndianRupee, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartProduct = ({ product }: { product: ProductType }) => {
    return (
        <div className="w-full flex items-center justify-between">
            <div key={product._id} className="flex gap-5 items-start">
                <Link href={`/product/${product._id}`}>
                    <Image
                        src={dummy}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="object-cover h-[50px] w-[50px]"
                    />
                </Link>
                <div className="w-[100px]">
                    <p>{product.name}</p>
                    <div>
                        <p className="text-price font-semibold flex items-center"><IndianRupee size={12} /> {product.price}</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-[60px] rounded-md p-1 flex items-center justify-center bg-primary gap-1">
                    <div>
                        <Plus size={18} color="#ffffff" />
                    </div>
                    <p className="font-semibold text-sm text-white">1</p>
                    <div>
                        <Minus size={18} color="#ffffff" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct