import { Product } from "../../models/product.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const getProductsWhenAuthenticationNotDone = asyncHandler(async (req, res, next) => {
    let { category } = req.query;
    category = category?.toUpperCase();
    const products = await Product.find({
        sellerType: { $in: ['FARMER'] },
        category: { $eq: category }
    });

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status, products, "Products fetched successfully")
    )
});

export default getProductsWhenAuthenticationNotDone;