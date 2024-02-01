import { Product } from "../../models/product.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const getProduct = asyncHandler(async (req, res, next) => {
    const productId = await isIDGood(req.params.productId);
    
    const product = await Product.findById(productId);
    if (!product) throw new ApiError(404, "Product not found");

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status, product, "Product fetched successfully")
    );
});

export default getProduct;