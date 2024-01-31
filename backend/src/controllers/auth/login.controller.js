import { cookieOptions } from "../../constants.js";
import { User } from "../../models/user.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new ApiError(404, "User does not exists");
    
    if(!user.isVerified) throw new ApiError(401 , "Email not verified");

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) throw new ApiError(401, "Invalid email or password");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();


    const { password: pass, ...others } = user._doc;

    const status = 200;
    return res
        .status(status)
        .cookie("FMA_AccessToken", accessToken, cookieOptions)
        .cookie("FMA_RefreshToken", refreshToken, cookieOptions)
        .json(
            new ApiResponse(status, others, "Login successful")
        )

});

export default login;