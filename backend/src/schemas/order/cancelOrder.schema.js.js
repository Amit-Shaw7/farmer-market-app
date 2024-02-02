import { z } from 'zod';

const CancelOrderSchema = z.object({
    orderId: z
        .string({
            required_error: 'ProductId is required',
        })
        .trim()
        .min(1, 'ProductId cannot be empty'),
});

export default CancelOrderSchema;