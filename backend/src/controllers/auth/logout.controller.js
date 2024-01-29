import { cookieOptions } from "../../constants.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const logout = asyncHandler(async (req , res , next) => {
    return res
    .status(200)
    .clearCookie("FMA_AccessToken" , cookieOptions)
    .clearCookie("FMA_RefreshToken" , cookieOptions)
    .json(
        new ApiResponse(200 , {} , "Logout successful")
    )
});

export default logout;