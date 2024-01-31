import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const getProfile = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status, user, "Profile fetched successfully")
    )
});

export default getProfile;