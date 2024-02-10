import { z } from "zod";

const forgetPasswordSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
        })
        .trim()
        .min(1, "Email cannot be empty")
        .email("Invalid email"),
});

export default forgetPasswordSchema;