import express from "express";
import AuthRouter from "./auth.routes.js";
import OtpRouter from "./otp.routes.js";
import UserRouter from "./user.routes.js";
import ProductRouter from "./product.routes.js";
import CartRouter from "./cart.routes.js";
import OrderRouter from "./order.routes.js";
import PaymentRouter from "./payment.routes.js";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/otp", OtpRouter);
router.use("/user", UserRouter);
router.use("/product", ProductRouter);
router.use("/cart", CartRouter);
router.use("/order", OrderRouter);
router.use("/payment", PaymentRouter);

export default router;