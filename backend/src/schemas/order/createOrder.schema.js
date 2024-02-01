import { z } from 'zod';

const CreateOrderSchema = z.object({
    products: z
        .array()
        .nonempty()
        .min(1, 'At least one product is required'),
    shippingDetails: z
        .object({
            address: z
                .string({
                    required_error: 'Address is required',
                })
                .trim()
                .min(1, 'Address cannot be empty'),
            city: z
                .string({
                    required_error: 'City is required',
                })
                .trim()
                .min(1, 'City cannot be empty'),
            state: z
                .string({

                })
                .trim()
                .min(1, 'State cannot be empty'),
            country: z
                .string({

                })
                .trim()
                .min(1, 'Country cannot be empty'),
            pincode: z
                .string({

                })
                .trim()
                .min(1, 'Pincode cannot be empty'),
            phone: z
                .string({

                })
                .trim()
                .min(1, 'Phone cannot be empty'),
        }),

    productId: z
        .string({
            required_error: 'ProductId is required',
        })
        .trim()
        .min(1, 'ProductId cannot be empty'),
    name: z
        .string({
            required_error: 'Product name is required',
        })
        .trim()
        .min(1, 'Product name cannot be empty'),
    price: z
        .number({
            required_error: 'Price is required',
        })
        .min(10, 'Price cannot be less than 10'),
    quantity: z
        .number({
            required_error: 'Quantity is required',
        })
        .min(1, 'Quantity cannot be less than 1'),
});

export default CreateOrderSchema;