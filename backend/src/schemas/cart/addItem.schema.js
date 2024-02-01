import { z } from 'zod';

const AddItemSchema = z.object({
    productId: z
        .string({
            required_error: 'ProductId is required',
        })
        .trim()
        .min(1, 'ProductId cannot be empty'),
    name: z
        .string({
            required_error: 'Product name is required',
        })
        .trim()
        .min(1, 'Product name cannot be empty'),
    price: z
        .number({
            required_error: 'Price is required',
        })
        .min(10, 'Price cannot be less than 10'),
    quantity: z
        .number({
            required_error: 'Quantity is required',
        })
        .min(1, 'Quantity cannot be less than 1'),
});

export default AddItemSchema;