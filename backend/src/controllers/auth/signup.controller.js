import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/apiError.js";
import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/apiResponse.js";

const signup = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new ApiError(400, "User already exists");
    }

    const user = await User.create({ name, email, password });
    const status = 201;
    return res.status(status).json(
        new ApiResponse(status, user, "Singup successful")
    );
});

export default signup;