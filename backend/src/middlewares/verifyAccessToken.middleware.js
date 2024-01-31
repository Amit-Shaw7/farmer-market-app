import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const verifyToken = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.FMA_AccessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return new ApiError(401, "Unauthorized");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decodedToken._id;
    if(!userId){
        return new ApiError(401, "Unauthorized");
    }

    req.userId = userId;
    req.role = decodedToken.role
    next();
});

export default verifyToken;