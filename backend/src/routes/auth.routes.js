import express from "express";
import signup from "../controllers/auth/signup.controller.js";
import validateData from "../middlewares/validate.middleware.js";
import SignupSchema from "../schemas/auth/signup.schema.js";
import login from "../controllers/auth/login.controller.js";
import LoginSchema from "../schemas/auth/login.schema.js";
import logout from "../controllers/auth/logout.controller.js";

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



export default router;