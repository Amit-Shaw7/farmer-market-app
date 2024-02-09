import { Product } from '@/components/Product';
import { Button } from '@/components/ui/button';
import { products } from '@/constants';
import React from 'react';

const Products = ({ title }: { title: string }) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <Button>See all</Button>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;