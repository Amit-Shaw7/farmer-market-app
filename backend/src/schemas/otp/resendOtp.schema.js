import { z } from 'zod';

const ResendOtpSchema = z.object({
    userId: z
        .string({
            required_error: 'UserId is required',
        })
        .trim(),
});

export default ResendOtpSchema;