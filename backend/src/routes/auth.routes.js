import express from "express";
import signup from "../controllers/auth/signup.controller.js";
import validateData from "../middlewares/validateData.middleware.js";
import SignupSchema from "../schemas/auth/signup.schema.js";
import login from "../controllers/auth/login.controller.js";
import LoginSchema from "../schemas/auth/login.schema.js";
import logout from "../controllers/auth/logout.controller.js";
import VerifyPasswordSchema from "../schemas/auth/verifyPassword.schema.js";
import verifyPassword from "../controllers/auth/verifyPassword.controller.js";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js";
import resetPassword from "../controllers/auth/resetPassword.controller.js";
import { forgetPassword } from "../controllers/auth/forgetPassword.controller.js";

const router = express.Router();

router.post(
    "/signup",
    validateData(SignupSchema),
    signup
);

router.post(
    "/login",
    validateData(LoginSchema),
    login
);

router.get(
    "/logout",
    logout
);

router.post(
    "/reset-password/:token",
    resetPassword
);

router.post(
    "/reset-password",
    resetPassword
);

router.post(
    "/forget-password",
    forgetPassword
);

router.post(
    "/verify",
    validateData(VerifyPasswordSchema),
    verifyToken,
    verifyPassword
);

export default router;