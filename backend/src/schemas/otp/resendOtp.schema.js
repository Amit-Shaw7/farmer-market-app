import { z } from 'zod';

const ResendOtpSchema = z.object({
    userId: z
        .string({
            required_error: 'UserId is required',
        })
        .trim(),
    otp: z
        .string({
            required_error: 'OTP is required',
        })
        .min(4, 'Password must be of 4 digit')
});

export default ResendOtpSchema;