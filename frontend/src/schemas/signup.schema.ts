import { z } from "zod"

const signupSchema = z.object({
    email: z
        .string({
            required_error: "Email must be a string"
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
    name: z
        .string({
            required_error: "Name must be a string"
        })
        .min(2 , {
            message: "Name must be at least 2 characters long"
        })
        .max(50 , {
            message: "Name must be at most 50 characters long"
        }),

    phone: z
        .string({
            required_error: "Phone number is required"
        })
        .min(10 , {
            message: "Enter a valid phone number"
        })
        .max(10 , {
            message: "Enter a valid phone number"
        })
});

export default signupSchema;