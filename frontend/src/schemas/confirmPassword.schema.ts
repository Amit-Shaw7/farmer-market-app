import { z } from "zod"

const confirmPasswordSchema = z.object({
    password: z
        .string({
            required_error: "Password must be a string"
        })
        .min(2, {
            message: "Password must be at least 2 characters long"
        })
        .max(20, {
            message: "Password must be at most 20 characters long"
        }),
})

export default confirmPasswordSchema;