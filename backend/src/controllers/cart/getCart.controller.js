import { Cart } from "../../models/cart.model.js";
import ApiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const getCart = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const cartId = await isIDGood(req.params.cartId);

    
    const cart = await Cart.findById(cartId);
    if (!cart) throw new ApiError(404, "Cart not found");

    if(userId !== cart.userId) throw new ApiError(400, "Cart does not belong to user");

    return res.status(200).json(
        new ApiResponse(200, cart, "Cart fetched successfully")
    )
});

export default getCart;