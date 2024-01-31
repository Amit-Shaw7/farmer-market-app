import { Cart } from "../../models/cart.model.js";
import { Order } from "../../models/order.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const createOrder = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const cartId = await isIDGood(req.params.cartId);
    const { shippingDetails } = req.body;

    const cart = await Cart.findById(cartId);
    if (!cart) throw new ApiError(404, "Cart not found");

    const order = await Order.create({
        userId,
        products: cart.products.map((product) => product._id),
        totalPrice: cart.totalPrice,
        deliveryCharge: cart.deliveryCharge,
        shippingDetails
    });

    if(!order) throw new ApiError(500, "Cannot place order try again later");

    return res.status(200).json(
        new ApiResponse(200 , order , "Order placed succesfully")
    );
});

export default createOrder;