import express from "express";
import validateData from "../middlewares/validateData.middleware";
import verifyToken from "../middlewares/verifyAccessToken.middleware";
import createOrder from "../controllers/order/createOrder.controller";
import cancelOrder from "../controllers/order/cancelOrder.controller";

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