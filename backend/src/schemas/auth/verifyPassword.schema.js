import { z } from "zod";

const VerifyPasswordSchema = z.object({
    password: z
        .string({
            required_error: "Password is required",
        })
});

export default VerifyPasswordSchema;