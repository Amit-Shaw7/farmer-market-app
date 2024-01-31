import express from "express";
import validateOtp from "../controllers/otp/validateOtp.controller.js";
import validateData from "../middlewares/validate.middleware.js";
import ValidateOtpSchema from "../schemas/otp/validateOtp.schema.js";

const router = express.Router();


router.post(
    "/validate/:userId",
    validateData(ValidateOtpSchema),
    validateOtp
)

export default router;