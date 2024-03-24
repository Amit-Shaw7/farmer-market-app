import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        razorpay_order_id: {
            type: String,
            required: true,
        },
        razorpay_payment_id: {
            type: String,
            required: true,
        },
        razorpay_signature: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Order"
        }
    },
    {
        timestamps: true
    }
);

export const Payment = mongoose.model("Payment", PaymentSchema);