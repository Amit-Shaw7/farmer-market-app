import { z } from 'zod';

const SignupSchema = z.object({
    name: z
        .string({
            required_error: 'Name is required',
        })
        .trim()
        .min(1, 'Name cannot be empty'),
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
        .min(1, 'Password cannot be empty')
});

export default SignupSchema;