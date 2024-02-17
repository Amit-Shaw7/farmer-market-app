import React from 'react';
import Category from '@/sections/home/Category';
import { productCategoriesForFarmer } from '@/constants/product-categories';
import { cn } from '@/lib/utils';
import Heading from '@/components/Heading';

const Categories = ({ className }: { className?: string }) => {
    return (
        <div className={cn("w-full", className)}>
            <div>
                <Heading text='Categories' showButton={false} />
                <div className="w-full grid gap-5 grid-cols-4 xs:grid-cols-5 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-5">
                    {
                        productCategoriesForFarmer.map((category) => (
                            <Category key={category.name} category={category} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;