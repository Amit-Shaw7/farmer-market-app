import mongoose from "mongoose";

const EachProductSchema = new mongoose.Schema(
    {
        _id: false,
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        pictures: [
            {
                type: String,
                trim: true
            }
        ],
        quantity: {
            type: Number,
            required: true,
        },
    }
)

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                type: EachProductSchema,
                default: []
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
            default: 0
        }
    },
    {
        timestamps: true
    }
);

export const Cart = mongoose.model("Cart", CartSchema);