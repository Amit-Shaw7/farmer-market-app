import { Cart } from "../../models/cart.model.js";
import { Order } from "../../models/order.model.js";
import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const createOrder = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);

    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    const cart = await Cart.findById(user.cartId);
    if (!cart) throw new ApiError(404, "Cart not found");

    if(cart.products.length === 0) throw new ApiError(400, "Cart is empty");

    // const productIds = cart.products.map((product) => product._id);

    const order = await Order.create({
        userId,
        products: cart.products.map((product) => product.productId),
        totalPrice: cart.totalPrice,
        deliveryCharge: cart.deliveryCharge,
        orderStatus: "Pending",
        shippingDetails : user.shippingDetails
    });
    if(!order) throw new ApiError(500, "Cannot place order try again later");
    
    return res.status(200).json(
        new ApiResponse(200 , order , "Order placed succesfully")
    );

    cart.products = [];
    cart.totalPrice = 0;
    cart.deliveryCharge = 0;
    await cart.save();

});

export default createOrder;