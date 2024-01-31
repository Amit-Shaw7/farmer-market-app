import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        expiresAt: {
            type: Date,
            required: true,
            default: () => Date.now() + 10 * 60 * 1000
        }
    },
    {
        timestamps: true
    }
);

export const Otp = mongoose.model("Otp", OtpSchema);