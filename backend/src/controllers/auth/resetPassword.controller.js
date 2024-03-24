import jwt from "jsonwebtoken";
import ApiError from "../../utils/apiError.js";
import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const resetPassword = asyncHandler(async (req, res, next) => {
    const { password } = req.body;

    let token = "";
    if (req.params?.token) {
        token = req.params?.token;
    } else {
        token = req.cookies?.FMA_AccessToken || req.header("Authorization")?.replace("Bearer ", "");
    }

    if (!token) throw new ApiError(401, "Unauthorized");

    const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decodedToken?._id;

    const user = await User.findById(userId);
    if (!user) throw new ApiError(400, "Password do not match");

    user.password = password;
    await user.save();

    const status = 200;
    return res
        .status(status)
        .json(
            new ApiResponse(status, { isPasswordValid: true }, "Password correct")
        )
});

export default resetPassword;