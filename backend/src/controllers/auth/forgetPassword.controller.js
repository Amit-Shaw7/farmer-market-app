import { User } from "../../models/user.model.js";
import sendMail from "../../services/sendMail.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

export const forgetPassword = asyncHandler(async (req, res, next) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return next(new ApiError("User does not exist", 400));

    const token = user.generateAccessToken();

    const resetPasswordUrl = `${req.headers.origin}/auth/reset-password/${token}`;

    const subject = "Reset Password Link";
    const text = "Your Reset Password link is here 😀";
    const html = `<div><h2 style='text-align:center; color:#fc8019'>AGROW</h2><br/><h3 style='text-align:center;'>!!OOps.. ${user?.name} You forget your password 😅😄. <br/> Dont worry visit the given url and reset your password. </h3><br/><h4>Reset Link : ${resetPasswordUrl}<br/>Expires in 10m</h4></div>`;

    sendMail(user.email, subject, html);

    return res.status(200).json(
        new ApiResponse(200, null, "Reset Link successfully")
    );
});