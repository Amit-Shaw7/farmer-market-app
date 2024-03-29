import { z } from "zod"

const loginSchema = z.object({
    email: z
        .string({
            required_error: "Email is required"
        })
        .email({
            message: "Email must be a valid email"
        })
        .min(3, {
            message: "Email must be at least 2 characters long"
        })
        .max(50, {
            message: "Email must be at most 50 characters long"
        }),
    password: z
        .string({
            required_error: "Password must be a string"
        })
        .min(2 , {
            message: "Password must be at least 2 characters long"
        })
        .max(20 , {
            message: "Password must be at most 20 characters long"
        }),
});

export default loginSchema;