import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const updateProfile = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const user = await User.findByIdAndUpdate(userId, {
        name: req.body.name,
        phone: req.body.phone,
        shippingDetails: req.body.address,
    }, {
        new: true
    });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status , user , "Profile updated successfully")
    )
});

export default updateProfile;