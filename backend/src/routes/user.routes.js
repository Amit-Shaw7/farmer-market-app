import express from "express";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js";
import getProfile from "../controllers/user/get.controller.js";
import updateProfile from "../controllers/user/update.controller.js";

const router = express.Router();

router.get(
    "/profile",
    verifyToken,
    getProfile
);

router.put(
    "/profile",
    verifyToken,
    updateProfile
);

export default router;