import ApiError from "../utils/apiError.js";

const validateData = (schema) => (req, res, next) => {
    console.log("Validate data running");
    const data = { ...req.body, ...req.params, ...req.query };
    console.log("--- Dta ----------");
    console.log(data);
    console.log("--- Dta ----------");
    try {
        schema.parse(data);
        next();
    } catch (error) {
        throw new ApiError(500, error.errors)
    }
};

export default validateData;