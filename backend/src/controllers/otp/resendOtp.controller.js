import { Otp } from "../../models/otp.model.js";
import sendMail from "../../services/sendMail.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import generateOTP from "../../utils/generateOtp.js";
import isIDGood from "../../utils/isIdGood.js";

const resendOtp = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.params.userId);

    const otp = await Otp.findOne({ userId });
    if (!otp) throw new ApiError(400, "Invalid request or Account already verified");

    otp.otp = generateOTP();
    otp.expiresAt = Date.now() + 10 * 60 * 1000;
    await otp.save();

    const html = `
        <div>
            <h1>Thanks for joining us</h1>
            <h3>This is your OTP ${otp}</h3>
        </div>
    `;
    // sendMail(otp.email, "OTP Verification", html);

    return res.status(200).json(
        new ApiResponse(200, null, "OTP sent successfully")
    );
});

export default resendOtp;