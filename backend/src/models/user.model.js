import mongoose from "mongoose";
import { defaultAvatar } from "../constants";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: [true, "email must be unique"],
            trim: true,
            lowercase: true,
            index: true
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        phone: {
            type: String,
            trim: true,
            unique: true,
        },
        role: {
            type: String,
            enum: ["FARMER", "DEALER", "SHOPKEEPER"],
            default: "FARMER"
        },
        businessDocument: {
            type: String, // will be in use only in role != FARMMER
        },
        avatar: {
            type: String,
            default: defaultAvatar
        },
        shippingDetails: {
            type: AddressSchema,
        },
        isVerified: { 
            type: Boolean,
            default: false
        },
        refreshToken: {
            type: String
        },
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart",
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", UserSchema);