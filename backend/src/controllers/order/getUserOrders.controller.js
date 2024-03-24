import { Order } from "../../models/order.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const getUserOrders = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);

    const orders = await Order.find({userId});
    if (!orders) throw new ApiError(404, "No orders found");

    return res.status(200).json(
        new ApiResponse(200, orders, "Order fetched succesfully")
    );
});

export default getUserOrders;