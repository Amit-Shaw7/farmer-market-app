import express from "express";
import verifyToken from "../middlewares/verifyAccessToken.middleware.js";
import isSeller from "../middlewares/isSeller.middleware.js";
import validateData from "../middlewares/validateData.middleware.js";
import AddProductSchema from "../schemas/product/addProduct.schema.js";
import addProduct from "../controllers/product/addProduct.controller.js";
import getProductsWhenAuthenticationDone from "../controllers/product/getProductsWhenAuthenticationDone.controller.js";
import getProductsWhenAuthenticationNotDone from "../controllers/product/getProductsWhenAuthenticationNotDone.controller.js";
import getProduct from "../controllers/product/getProduct.controller.js";
import updateProduct from "../controllers/product/updateProduct.controller.js";
import deleteProduct from "../controllers/product/deleteProduct.controller.js";

const router = express.Router();

router.post(
    "/add",
    verifyToken,
    isSeller,
    validateData(AddProductSchema),
    addProduct
);

router.get(
    "/all",
    verifyToken,
    getProductsWhenAuthenticationDone
);

router.get(
    "/products",
    getProductsWhenAuthenticationNotDone
);

router.get(
    "/:productId",
    verifyToken,
    getProduct
);

router.put(
    "/:productId",
    verifyToken,
    isSeller,
    updateProduct
);

router.delete(
    "/:productId",
    verifyToken,
    isSeller,
    deleteProduct
);

export default router;