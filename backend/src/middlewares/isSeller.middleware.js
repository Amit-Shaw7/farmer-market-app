import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const isSeller = asyncHandler(async (req, res, next) => {
    const { role } = req;
    console.log("------- Body -----------");
    console.log(req.body);
    console.log("------- Body -----------");
    
    if (role === "SHOPKEEPER") {
        throw new ApiError(401, "Unauthorized");
    }
    next();
});

export default isSeller;