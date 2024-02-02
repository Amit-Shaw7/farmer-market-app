import { Order } from "../../models/order.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const cancelOrder = asyncHandler(async (req , res , next) => {
    const userId = await isIDGood(req.userId);
    const orderId = await isIDGood(req.params.orderId);

    const order = await Order.findById(orderId);
    if(!order) throw new ApiError(404 , "Cannot find order");

    if(!order.userId.equals(userId)) throw new ApiError(401 , "You can only cancel your orders only");

    order.orderStatus = "Cancelled";
    await order.save();

    return res.status(200).json(
        new ApiResponse(200 , null , "Order cancelled succesfully")
    );
});

export default cancelOrder;