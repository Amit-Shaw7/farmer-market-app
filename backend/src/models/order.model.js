import mongoose from "mongoose";
import AddressSchema from "../schemas/addressSchema.js";


const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            }
        ],
        totalPrice: {
            type: Number,
            default: 0
        },
        deliveryCharge: {
            type: Number,
            default: 0
        },
        orderStatus: {
            type: String,
            default: "Pending",
            enum: ["Pending", "Approved", "Delivered", "Cancelled"],
            default: "Pending"
        },
        deliveredAt: {
            type: Date,
        },
        shippingDetails: {
            type: AddressSchema,
        },
        paymentInfo: {
            type: mongoose.Schema.Types.ObjectId, // for razorpay
            ref: "Payment"
        }
    },
    {
        timestamps: true
    }
);

export const Order = mongoose.model("Order", OrderSchema);