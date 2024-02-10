import { z } from "zod";

const SignupSchema = z.object({
    name: z
        .string({
            required_error: "Name is required",
        })
        .trim()
        .min(1, "Name cannot be empty"),
    email: z
        .string({
            required_error: "Email is required",
        })
        .trim()
        .min(1, "Email cannot be empty")
        .email("Invalid email"),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min(6, "Password must be at least 6 characters long"),
});

export default SignupSchema;