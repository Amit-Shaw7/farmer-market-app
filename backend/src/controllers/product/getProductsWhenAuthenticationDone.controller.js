import { Product } from "../../models/product.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import isIDGood from "../../utils/isIdGood.js";

const getProductsWhenAuthenticationDone = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const { role } = req;

    let products = [];

    if (role === 'Farmer') {
        // Only show products added by Shopkeepers
        products = await Product.find({ 
            sellerType: { $in: ['Shopkeeper'] } 
        }).exec();
    } 
    
    else if (role === 'Shopkeeper') {
        // Show products added by Dealers and Shopkeepers
        products = await Product.find({
            addedBy: { $in: ['Dealer', 'Shopkeeper'] }
        }).exec();
    } 
    
    else if (role === 'Dealer') {
        // Only show products added by Dealers
        products = await Product.find({ 
            addedBy: { $in: ['Dealer'] } 
        }).exec();
    } 
    
    const status = 200;
    return res.status(status).json(
        new ApiResponse(status , products , "Products fetched successfully")
    ) 
    
});

export default getProductsWhenAuthenticationDone;