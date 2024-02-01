import express from "express";
import validateData from "../middlewares/validateData.middleware.js";
import AddItemSchema from "../schemas/cart/addItem.schema.js";
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
    validateData(AddItemSchema),
    removeItemFromCart
);

router.get(
    "/cart",
    verifyToken,
    getCart
);



export default router;