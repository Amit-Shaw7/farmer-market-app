import { z } from 'zod';
import { ALLOWED_CATEGORIES } from '../../constants.js';

const AddProductSchema = z.object({
    name: z
        .string({
            required_error: 'Name is required',
        })
        .trim()
        .min(1, 'Name cannot be empty'),
    description: z
        .string({
            required_error: 'Descriptioin is required',
        })
        .trim()
        .min(1, 'Description cannot be empty'),
    price: z
        .number({
            required_error: 'Price is required',
        })
        .min(10, 'Price cannot be less than 10'),
    category: z
        .string({
            required_error: 'Category is required',
        })
        .refine((value) => {
            ALLOWED_CATEGORIES.includes(value), {
                message: 'Invalid category'
            }
        }),
    stock: z
        .number({
            required_error: 'Stock is required',
        })
        .min(1, 'Stock cannot be less than 1'),

});

export default AddProductSchema;