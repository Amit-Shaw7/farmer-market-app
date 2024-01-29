export const globalError = (error , req , res, next) => {
    error.message = error.message || "Internal server error";
    error.statusCode = error.statusCode || 500;

    return res.status(error.statusCode).json({
        success: false,
        msg : error.message,
        status : error.statusCode
    })
};