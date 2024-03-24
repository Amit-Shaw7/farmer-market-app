import express from "express";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js";
import createOrder from "../controllers/order/createOrder.controller.js";
import cancelOrder from "../controllers/order/cancelOrder.controller.js";
import validateData from "../middlewares/validateData.middleware.js"
import CancelOrderSchema from "../schemas/order/cancelOrder.schema.js.js";
import getUserOrders from "../controllers/order/getUserOrders.controller.js";

const router = express.Router();

router.post(
    "/createorder",
    verifyToken,
    createOrder
);

router.get(
    "/myorders",
    verifyToken,
    getUserOrders
);

router.put(
    "/cancelorder/:orderId",
    validateData(CancelOrderSchema),
    verifyToken,
    cancelOrder
)

export default router;