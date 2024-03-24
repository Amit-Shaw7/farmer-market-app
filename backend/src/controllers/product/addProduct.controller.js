import { Product } from "../../models/product.model.js";
import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isCategoryValid from "../../helpers/isCategoryValid.js";
import isIDGood from "../../utils/isIdGood.js";
import uploadOnCloudinary from "../../services/cloudinary.js";

const addProduct = asyncHandler(async (req, res, next) => {
    console.log("AddProduct running");

    const { name: sellerName, role } = req;
    const { category, stock, price } = req.body;
    const userId = await isIDGood(req.userId);

    const files = req?.files;
    if (!files) throw new ApiError(400, "No files found");

    const uplaodedFiles = await files.map(async (file) => {
        return uploadOnCloudinary(file.path);
    });

    const allFiles = await Promise.all(uplaodedFiles);

    const pictureUrls = allFiles.map((file) => {
        return file.secure_url;
    });

    const categoryValid = isCategoryValid(category, role);
    if (!categoryValid) throw new ApiError(401, `You cannot sell ${category}`);

    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    req.body.sellerName = sellerName;
    req.body.sellerId = userId;
    req.body.sellerType = role;
    req.body.pictures = pictureUrls;
    req.body.stock = Number.parseInt(stock);
    req.body.price = Number.parseInt(price);

    const product = await Product.create({ ...req.body });

    if (!product) throw new ApiError(400, "Cannot create product try againg later");

    const status = 201;
    return res.status(status).json(
        new ApiResponse(status, product, "Product created successfully")
    );
});

export default addProduct;