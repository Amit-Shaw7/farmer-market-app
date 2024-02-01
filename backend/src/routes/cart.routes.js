import express from "express";
import validateData from "../middlewares/validateData.middleware";
import AddItemSchema from "../schemas/cart/addItem.schema";
import verifyToken from "../middlewares/verifyAccessToken.middleware"
import addItemToCart from "../controllers/cart/addItemToCart.controller";
import removeItemFromCart from "../controllers/cart/removeItemFromCart.controller";
import getCart from "../controllers/cart/getCart.controller";

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
)



export default router;