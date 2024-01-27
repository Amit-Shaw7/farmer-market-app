import mongoose from "mongoose";
import AddressSchema from "../schemas/addressSchema";

const EachProductSchema = new mongoose.Schema(
    {
        _id: false,
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        firstProductpicture: {
            type: string,
            required: true,
        },
    }
)

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                type: EachProductSchema,
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
        taxes: {
            type: Number,
        },
        orderStatus : {
            type: String,
            default: "Pending",
            enum : ["Pending" , "Delivered" , "Cancelled"],
        },
        deliveredAt : {
            type: Date,
        },
        shippingDetails: {
            type: AddressSchema,
        },
        paymentInfo : {
            type : mongoose.Schema.Types.ObjectId, // for razorpay
            ref : "Payment"
        }
    },
    {
        timestamps: true
    }
);

export const Order = mongoose.model("Order", OrderSchema);