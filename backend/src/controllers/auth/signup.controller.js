import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import { Otp } from "../../models/otp.model.js";
import generateOTP from "../../utils/generateOtp.js";
import sendMail from "../../services/sendMail.js";

const signup = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) throw new ApiError(400, "User already exists");

    const user = await User.create({ name, email, password });

    const otp = generateOTP();
    await Otp.create({ userId: user._id, otp });

    const html = `
        <div>
            <h1>Thanks for joining us</h1>
            <h3>This is your OTP ${otp}</h3>
        </div>
    `;
    sendMail(email, "OTP Verification", html);

    const status = 201;
    return res.status(status).json(
        new ApiResponse(status, user, "Singup successful")
    );
});

export default signup;