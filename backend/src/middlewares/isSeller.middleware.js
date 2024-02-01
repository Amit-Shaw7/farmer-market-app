import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const isSeller = asyncHandler(async (req, res, next) => {
    console.log("Running isSeller");
    const { role } = req;
    console.log("User is "+ role);
    if (role === "SHOPKEEPER") {
        console.log("Finished Running isSeller returning 401");
        throw new ApiError(401, "Unauthorized");
    }
    console.log("Finished Running isSeller");
    next();
});

export default isSeller;