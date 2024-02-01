import express from "express";
import validateOtp from "../controllers/otp/validateOtp.controller.js";
import validateData from "../middlewares/validateData.middleware.js";
import ValidateOtpSchema from "../schemas/otp/validateOtp.schema.js";
import ResendOtpSchema from "../schemas/otp/resendOtp.schema.js";
import resendOtp from "../controllers/otp/resendOtp.controller.js";

const router = express.Router();

router.post(
    "/validate/:userId",
    validateData(ValidateOtpSchema),
    validateOtp
);

router.put(
    "/resend/:userId",
    validateData(ResendOtpSchema),
    resendOtp
)

export default router;