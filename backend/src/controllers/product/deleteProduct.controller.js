import { Product } from "../../models/product.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const deleteProduct = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const productId = await isIDGood(req.params.productId);

    const product = await Product.findById(productId);
    if(!product) throw new ApiError(404, "Product not found");

    console.log();
    if(!product.sellerId.equals(userId)) throw new ApiError(401, "You can only delete your products");

    const deleted = await Product.findByIdAndDelete(product._id);
    if(!deleted) throw new ApiError(400, "Cannot delete product try again later");

    const status = 200;
    return res.status(status).json(
        new ApiResponse(status , deleted , "Product deleted successfully")
    );
});

export default deleteProduct;