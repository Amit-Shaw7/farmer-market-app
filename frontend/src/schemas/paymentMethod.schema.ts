import * as z from "zod";

const paymentMethodSchema = z.object({
    paymentMethod: z
        .string({
            required_error: "Please select an email to display.",
        }),
});

export default paymentMethodSchema;