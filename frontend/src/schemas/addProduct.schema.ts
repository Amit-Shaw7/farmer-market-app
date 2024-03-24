import { z } from "zod";

const addProductSchema = z.object({
    name: z
        .string({
            required_error: "Name is required"
        })
        .min(1, {
            message: "Name is requiredcharacter"
        }),
    description: z
        .string({
            required_error: "Description is required"
        })
        .min(10, {
            message: "Please write a brief description will help in SEO"
        })
        .max(200, {
            message: "Cannot exceed 200 characters"
        }),
    category: z
        .string({
            required_error: "Category is required"
        })
        .min(1, {
            message: "Category is required"
        }),
    price: z
        .string({
            required_error: "Price is required"
        })
        .min(1, {
            message: "Price is required"
        }),
    stock: z
        .string({
            required_error: "Quantity is required"
        })
        .min(1, {
            message: "Quantity is required"
        }),
    keyFeatures: z
        .string()
        .optional(),
    unit: z
        .string({
            required_error: "Unit is required"
        })
        .min(1, {
            message: "Unit is required"
        }),

});

export default addProductSchema;