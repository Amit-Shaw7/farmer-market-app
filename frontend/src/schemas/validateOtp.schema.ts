import { z } from "zod";

const validateOtpSchema = z.object({
    otp: z
        .string({
            required_error: "Please enter a valid OTP"
        })
        .min(6 , {
            message: "Invalid OTP"
        })
        .max(6 , {
            message: "Invalid OTP"
        }),
});

export default validateOtpSchema;