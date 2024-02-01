import { Product } from "../../models/product.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const getProductsWhenAuthenticationDone = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const { role } = req;

    let products = [];

    if (role === 'SHOPKEEPER') {
        // Only show products added by Shopkeepers
        products = await Product.find({ 
            sellerType: { $in: ['FARMER'] } 
        }).exec();
    } 
    
    else if (role === 'FARMER') {
        // Show products added by Dealers and Shopkeepers
        products = await Product.find({
            sellerType: { $in: ['DEALER', 'FARMER'] }
        }).exec();
    } 
    
    else if (role === 'DEALER') {
        // Only show products added by Dealers
        products = await Product.find({ 
            sellerType: { $in: ['DEALER'] } 
        }).exec();
    } 
    
    const status = 200;
    return res.status(status).json(
        new ApiResponse(status , products , "Products fetched successfully")
    ) 
    
});

export default getProductsWhenAuthenticationDone;