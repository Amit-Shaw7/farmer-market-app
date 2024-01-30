import { Otp } from "../../models/otp.model.js";
import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const validateOtp = asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const { otp } = req.body;

    console.log(req.params);

    const id = await isIDGood(userId);

    const otpExists = await Otp.findOne({ userId: id });
    if (!otpExists) {
        throw new ApiError(400, "Invalid request");
    }

    const otpVerified = otp === otpExists.otp;
    if (!otpVerified) {
        throw new ApiError(400, "OTP is incorrect");
    }

    const user = await User.findById(id);
    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    user.isVerified = true;
    await user.save();

    await Otp.deleteMany({userId: id});
    const status = 200;

    return res.status(status).json(
        new ApiResponse(status, user, "OTP verified successfully")
    );
});

export default validateOtp;