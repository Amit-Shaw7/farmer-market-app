import { z } from 'zod';

const LoginSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .trim()
        .min(1, 'Email cannot be empty')
        .email('Invalid email'),
    password: z
        .string({
            required_error: 'Password is required',
        })
        .min(6, 'Password must be at least 6 characters long'),
});

export default LoginSchema;