import { z } from 'zod';
import { ALLOWED_CATEGORIES } from '../../constants.js';
import ApiError from '../../utils/apiError.js';

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
        .transform(value => {
            if (!ALLOWED_CATEGORIES.includes(value)) {
                throw new ApiError('Invalid category. Allowed categories are: dairy, seeds, equipment.');
            }
            return value;
        }),
    stock: z
        .number({
            required_error: 'Stock is required',
        })
        .min(1, 'Stock cannot be less than 1'),

});

export default AddProductSchema;