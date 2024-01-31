import ApiError from "../utils/apiError.js";

const isSeller = asyncHandler(async (req, res, next) => {
    const { role } = req;
    if (role !== "Shopkeeper" || role !== "Dealer") {
        return new ApiError(401, "Unauthorized");
    }
    next();
});

export default isSeller;