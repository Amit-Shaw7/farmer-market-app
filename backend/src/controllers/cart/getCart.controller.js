import { Cart } from "../../models/cart.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const getCart = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    
    const cart = await Cart.findOne({userId});
    if (!cart) throw new ApiError(404, "Cart not found");

    return res.status(200).json(
        new ApiResponse(200, cart, "Cart fetched successfully")
    )
});

export default getCart;