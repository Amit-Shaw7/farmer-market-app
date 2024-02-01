import verifyCartOwner from "../../helpers/verifyCartOwner.js";
import { Cart } from "../../models/cart.model.js";
import { Product } from "../../models/product.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const removeItemFromCart = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const productId = await isIDGood(req.body.productId);

    const product = await Product.findById(productId);
    if (!product) throw new ApiError(404, "Product not found");

    const cart = await Cart.findOne({ userId });
    if (!cart) throw new ApiError(404, "Cart not found");

    console.log(cart.products);
    const deletedProduct = cart.products.find((product) => product.productId.equals(productId) === true);
    console.log(deletedProduct);
    const quantity = deletedProduct.quantity;

    const currentItemTotalPrice = quantity * product.price;
    const newCartValue = cart.totalPrice - currentItemTotalPrice;
    const deliveryCharges = newCartValue > 0 ? newCartValue > 1000 ? 0 : 120 : 0;

    cart.products = cart.products.filter((product) => product.productId.equals(productId) === false); // not equals to productId;
    cart.totalPrice = newCartValue;
    cart.deliveryCharge = deliveryCharges;
    await cart.save();

    return res.status(200).json(
        new ApiResponse(200, null, "Item removed from cart successfully")
    )
});

export default removeItemFromCart;