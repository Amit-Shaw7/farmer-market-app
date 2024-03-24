import { Product } from "../../models/product.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const searchProducts = asyncHandler(async (req, res, next) => {
    const { query } = req.query;
    // const { role } = req;

    const products = await Product.find({
        $or: [
            { name: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } }
        ],
    });

    if (products.length === 0) {
        return res.status(200).json(
            new ApiResponse(200, [], "No products found")
        );
    }

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status, products, "Products fetched successfully")
    );
});

export default searchProducts;