import mongoose from "mongoose";
import ApiError from "./apiError.js";
const isIDGood = async (id) => {
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid ID");
    }
    return id;
};

export default isIDGood;