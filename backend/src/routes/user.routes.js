import express from "express";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js";
import getProfile from "../controllers/user/getProfile.controller.js";
import updateProfile from "../controllers/user/updateProfile.controller.js";
import addAddress from "../controllers/user/addAddress.controller.js";

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

router.put(
    "/address",
    verifyToken,
    addAddress
)

export default router;