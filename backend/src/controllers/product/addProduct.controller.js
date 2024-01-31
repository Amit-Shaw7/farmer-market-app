import { Product } from "../../models/product.model.js";
import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isCategoryValid from "../../helpers/isCategoryValid.js";
import isIDGood from "../../utils/isIdGood.js";

const addProduct = asyncHandler(async (req, res, next) => {
    const { name:sellerName, role } = req;
    const { category } = req.body;
    const userId = await isIDGood(req.userId);

    const categoryValid = isCategoryValid(category, role);
    if(!categoryValid) throw new ApiError(401, `You cannot sell ${category}s`);

    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    req.body.sellerName = sellerName;
    req.body.sellerId = userId;
    req.body.sellerType = role;

    const product = await Product.create({ ...req.body });
    if (!product) throw new ApiError(400, "Cannot create product try againg later");

    const status = 201;
    return res.status(status).json(
        new ApiResponse(status, product, "Product created successfully")
    );
});

export default addProduct;