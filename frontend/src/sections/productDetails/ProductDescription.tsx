import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { ourFeatures } from "@/constants";
import { product } from "@/development/mocks/productDetails";
import { CheckCircle, IndianRupee } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductDescription = () => {
    return (
        <div className="mt-5 p-2 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-medium">{product.name}</h1>
                <p className="text-md text-muted-foreground">{product.description}</p>
            </div>

            <div className="flex items-center gap-2">
                <IndianRupee size={14} />
                <h2 className="text-xl font-medium">{product.price}</h2>
            </div>

            <div className="flex flex-col gap-2">
                {
                    product.keyFeatures.map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3">
                            <CheckCircle color="green" />
                            <h3 className="text-lg font-medium">{feature}</h3>
                        </div>
                    ))
                }
            </div>

            <div>
                <span className="font-medium">Sold by - </span>
                <span className="text-muted-foreground">ABC GROUP</span>
            </div>

            <div>
                <Button>
                    Add to cart
                </Button>
            </div>

            <div className="flex flex-col gap-5">
                <p className="text-lg font-medium">Why shop from us?</p>
                <div className="flex flex-col gap-5">
                    {
                        ourFeatures.map((feature, index) => (
                            <div key={feature.title} className="flex items-center gap-10">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <h3 className="text-lg font-medium">{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;