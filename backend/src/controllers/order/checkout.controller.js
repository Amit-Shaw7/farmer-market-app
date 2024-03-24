import { Cart } from "../../models/cart.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";
import razorpayInstance from "../../services/razorpay.js";
import { User } from "../../models/user.model.js";

const checkout = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);

    const cart = await Cart.findOne({ userId });
    if(!cart) throw new ApiError(404, "Cart not found");

    const amount = (cart.totalPrice + cart.deliveryCharge) * 100;

    const options = {
        amount: amount,  // amount in the smallest currency unit
        currency: "INR"
    };

    const order = await razorpayInstance.orders.create(options);
    // console.log(order);

    return res.status(200).json(
        new ApiResponse(200, order, "Order created successfully")
    )
});

export default checkout;