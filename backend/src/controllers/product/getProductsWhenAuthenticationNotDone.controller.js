import { Product } from "../../models/product.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const getProductsWhenAuthenticationNotDone = asyncHandler(async (req, res, next) => {
    const products = await Product.find({
        sellerType: { $in: ['Shopkeeper'] }
    });

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status, products, "Products fetched successfully")
    )
});

export default getProductsWhenAuthenticationNotDone;