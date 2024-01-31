import { Product } from "../../models/product.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isCategoryValid from "../../utils/isCategoryValid.js";
import isIDGood from "../../utils/isIdGood.js";

const updateProduct = asyncHandler(async (req, res, next) => {
    const { role } = req;
    const category = req.body?.category;

    const userId = await isIDGood(req.userId);
    const productId = await isIDGood(req.params.productId);

    const product = await Product.findById(productId);
    if (!product) throw new ApiError(404, "Product not found");

    if (product.sellerId !== userId) throw new ApiError(401, "You can only update your products");

    const categoryValid = category ? isCategoryValid(category, role) : true;
    if (!categoryValid) throw new ApiError(401, `You cannot sell ${category}s`);

    await Product.findByIdAndUpdate(productId, {
        ...req.body,
    } , {new : true});

    const status = 201;
    return res.status(status).json(
        new ApiResponse(status, product, "Product created successfully")
    );
});

export default updateProduct;