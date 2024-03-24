import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const addAddress = asyncHandler(async (req, res, next) => {
    const { address , state , city , pincode} = req.body;
    const userId = await isIDGood(req.userId);
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    user.shippingDetails.address = address;
    user.shippingDetails.state = state;
    user.shippingDetails.city = city;
    user.shippingDetails.pincode = pincode;

    await user.save();

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status, user, "Address updated successfully")
    )
});

export default addAddress;