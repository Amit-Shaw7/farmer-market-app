import { Cart } from "../../models/cart.model.js";
import { Product } from "../../models/product.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";

const addItemToCart = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const productId = await isIDGood(req.body.productId);
    const { quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) throw new ApiError(404, "Product not found");

    const cart = await Cart.findOne({ userId });
    if (!cart) throw new ApiError(404, "Cart not found");

    cart.products.push({
        productId,
        name: product.name,
        price: product.price,
        quantity,
        pictures: product.pictures[0]
    });

    const currentItemTotalPrice = quantity * product.price;
    const newCartValue = cart.totalPrice + currentItemTotalPrice;
    const deliveryCharges = newCartValue > 1000 ? 0 : 120;

    cart.totalPrice = newCartValue;
    cart.deliveryCharge = deliveryCharges;

    await cart.save();

    return res.status(200).json(
        new ApiResponse(200, product, "Item added to cart successfully")
    )
});

export default addItemToCart;