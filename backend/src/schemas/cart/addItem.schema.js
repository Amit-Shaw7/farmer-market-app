import { z } from 'zod';

const AddItemSchema = z.object({
    productId: z
        .string({
            required_error: 'ProductId is required',
        })
        .trim()
        .min(1, 'ProductId cannot be empty'),
    quantity: z
        .number({
            required_error: 'Quantity is required',
        })
        .min(1, 'Quantity cannot be less than 1')
});

export default AddItemSchema;