import OurFeatures from "@/components/OurFeatures";
import { Button } from "@/components/ui/button";
import { product } from "@/development/mocks/productDetails";
import { CheckCircle, IndianRupee } from "lucide-react";
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

            <OurFeatures/>
        </div>
    );
};

export default ProductDescription;