import express from "express";
import AuthRouter from "./auth.routes.js";
import OtpRouter from "./otp.routes.js";
import UserRouter from "./user.routes.js";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/otp", OtpRouter);
router.use("/user", UserRouter);

export default router;