import { Cart } from "../../models/cart.model.js";
import { Otp } from "../../models/otp.model.js";
import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const validateOtp = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.params.userId);
    const { otp } = req.body;

    const otpExists = await Otp.findOne({ userId });
    if (!otpExists) throw new ApiError(400, "Invalid request");

    const otpVerified = (otp === otpExists.otp);
    if (!otpVerified) throw new ApiError(400, "OTP is incorrect");

    if(otpExists.expiresAt < Date.now()) throw new ApiError(400, "OTP expired");

    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User does not exist");

    const cart = await Cart.create({
        userId: user._id,
        products: [],
    });

    user.isVerified = true;
    user.cartId = cart._id;

    await Otp.findByIdAndDelete(otpExists._id);
    const status = 200;
    
    await user.save();
    return res.status(status).json(
        new ApiResponse(status, user, "OTP verified successfully")
    );
});

export default validateOtp;