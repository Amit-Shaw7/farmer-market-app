import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { Payment } from "../../models/payment.model.js";
import { Order } from "../../models/order.model.js";
import { User } from "../../models/user.model.js";
import { Cart } from "../../models/cart.model.js";
import ApiError from "../../utils/apiError.js";

const verifyPayment = asyncHandler(async (req, res, next) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    const { userId, cartId } = req.query; 

    const user = await User.findById(userId);
    if (!user.cartId.equals(cartId)) throw new ApiError(403, "Not Allowed");

    const cart = await Cart.findById(user.cartId);
    if (!cart) throw new ApiError(404, "Cart not found");

    if (cart.products.length === 0) throw new ApiError(400, "Cart is empty");

    const isVerified = validatePaymentVerification(
        {
            "order_id": razorpay_order_id,
            "payment_id": razorpay_payment_id
        },
        razorpay_signature, process.env.RAZORPAY_KEY_SECRET
    );
    if (!isVerified) throw new ApiError(400, "Payment verification failed");



    const order = await Order.create({
        userId,
        products: cart.products.map((product) => product.productId),
        totalPrice: cart.totalPrice,
        deliveryCharge: cart.deliveryCharge,
        orderStatus: "PENDING",
        shippingDetails: user.shippingDetails
    });

    if (!order) throw new ApiError(500, "Cannot place order try again later");

    const payment = await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userId,
        orderId: order._id,
    });

    order.paymentInfo = payment._id;

    await order.save();

    return res.
        status(200)
        .redirect(`http://localhost:5173/payment-success?paymentId=${payment._id}&orderId=${order._id}`)
        .json(
            new ApiResponse(200, {}, "Payment verified successfully")
        )
});

export default verifyPayment;