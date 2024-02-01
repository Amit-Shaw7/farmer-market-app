import ApiError from "../utils/apiError.js";

const validateData = (schema) => (req, res, next) => {
    console.log("Running validator");
    const data = { ...req.body, ...req.params, ...req.query };
    console.log({...data});
    try {
        schema.parse(data);
        console.log("Validator finished succesfully");
        next();
    } catch (error) {
        console.log("error occured in vaildator");
        console.log(error.errors);
        throw new ApiError(500, error.errors)
    }
};

export default validateData;