import express from "express";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js";
import checkout from "../controllers/order/checkout.controller.js";
import verifyPayment from "../controllers/payment/paymentVerification.controller.js";

const router = express.Router();

router.post(
    "/checkout",
    verifyToken,
    checkout
);

router.post(
    "/verify-payment",
    // verifyToken,
    verifyPayment
);

export default router;