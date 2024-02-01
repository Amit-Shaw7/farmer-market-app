import { z } from 'zod';

const RemoveItemSchema = z.object({
    productId: z
        .string({
            required_error: 'ProductId is required',
        })
        .trim()
        .min(1, 'ProductId cannot be empty'),
});

export default RemoveItemSchema;