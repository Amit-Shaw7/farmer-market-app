import verifyCartOwner from "../../helpers/verifyCartOwner.js";
import { Cart } from "../../models/cart.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const removeItemFromCart = asyncHandler(async (req, res, next) => {
    const cartId = await isIDGood(req.params.cartId);
    const userId = await isIDGood(req.userId);
    const productId = await isIDGood(req.body.productId);
    const { quantity, price } = req.body;

    const ownerVerified = verifyCartOwner(userId, cartId);
    if (!ownerVerified) throw new ApiError(400, "Cart does not belong to user");

    const currentItemTotalPrice = quantity * price;
    const newCartValue = cart.totalPrice - currentItemTotalPrice;
    const deliveryCharges = newCartValue > 1000 ? 0 : 120;

    const cart = await Cart.findById(cartId);
    cart.products = cart.products.filter((product) => product.productId !== productId);
    cart.totalPrice = newCartValue;
    cart.deliveryCharge = deliveryCharges;
    await cart.save();

    return res.status(200).json(
        new ApiResponse(200, null, "Item removed from cart successfully")
    )
});

export default removeItemFromCart;