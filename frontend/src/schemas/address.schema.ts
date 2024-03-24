import { z } from "zod";

const addressSchema = z.object({
    address: z
        .string({
            required_error: "Address is required"
        })
        .min(3, {
            message: "Enter a valid Address"
        }),
    pincode: z
        .string({
            required_error: "Pincode is required"
        })
        .min(6, {
            message: "Enter a valid Pincode"
        })
        .max(6, {
            message: "Enter a valid Pincode"
        }),
    state : z
        .string({
            required_error: "State is required"
        })
        .min(3, {
            message: "Enter a valid State"
        })
        .max(50, {
            message: "Enter a valid State"
        }),
    city : z
        .string({
            required_error: "City is required"
        })
        .min(3, {
            message: "Enter a valid City"
        })
        .max(50, {
            message: "Enter a valid City"
        })
});

export default addressSchema;