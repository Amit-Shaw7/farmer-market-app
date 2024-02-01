import express from "express";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js";
import createOrder from "../controllers/order/createOrder.controller.js";
import cancelOrder from "../controllers/order/cancelOrder.controller.js";

const router = express.Router();

router.post(
    "createorder",
    // validateData()
    verifyToken,
    createOrder
);

router.put(
    "cancelorder",
    verifyToken,
    cancelOrder
)

export default router;