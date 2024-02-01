import express from "express";
import validateData from "../middlewares/validateData.middleware.js";
import RemoveItemSchema from "../schemas/cart/addItem.schema.js";
import AddItemSchema from "../schemas/cart/removeItem.schema.js";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js"
import addItemToCart from "../controllers/cart/addItemToCart.controller.js";
import removeItemFromCart from "../controllers/cart/removeItemFromCart.controller.js";
import getCart from "../controllers/cart/getCart.controller.js";

const router = express.Router();

router.post(
    "/addToCart",
    verifyToken,
    validateData(AddItemSchema),
    addItemToCart
);

router.put(
    "/removeFromCart",
    verifyToken,
    validateData(RemoveItemSchema),
    removeItemFromCart
);

router.get(
    "/",
    verifyToken,
    getCart
);



export default router;