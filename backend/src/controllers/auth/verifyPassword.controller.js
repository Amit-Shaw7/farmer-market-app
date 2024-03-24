import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const verifyPassword = asyncHandler(async (req, res, next) => {
    const { password } = req.body;
    const userId = await isIDGood(req.userId);

    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User does not exists");

    if (!user.isVerified) throw new ApiError(401, "Email not verified");

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) throw new ApiError(401, "Invalid password");

    const status = 200;
    return res
        .status(status)
        .json(
            new ApiResponse(status, {isPasswordValid : true}, "Password correct")
        )
});

export default verifyPassword;