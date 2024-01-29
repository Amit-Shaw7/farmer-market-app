import ApiError from "../utils/apiError";
import jwt from "jsonwebtoken";

const verifyToken = asyncHandler = (async (req, res, next) => {
    const token = req.cookies?.FMA_AccessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return new ApiError(401, "Unauthorized");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken._id;
    if(!userId){
        return new ApiError(401, "Unauthorized");
    }

    req.userId = userId;
    next();
});

export default verifyToken;