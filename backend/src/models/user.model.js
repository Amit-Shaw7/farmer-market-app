import mongoose from "mongoose";
import { defaultAvatar } from "../constants.js";
import AddressSchema from "../schemas/addressSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
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

UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.isPasswordCorrect = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}  

UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            name : this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

UserSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", UserSchema);