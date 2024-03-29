import { CustomResponse } from "@/types";
import { AxiosError } from "axios";
import * as z from "zod";

export const errorResponse = (
    status: number,
    error?: object | AxiosError | z.ZodError | any
): CustomResponse => {
    let msg = "";
    if (error) {
        if (error instanceof AxiosError) {
            status = error?.response?.status || status;
            error = error?.response?.data || error.message;
            msg = error?.msg ? error?.msg : "error";
        } else if (error instanceof z.ZodError) {
            error.errors.map((err) => {
                msg = err.message
            });
            error = { msg: "Invalid Inputs" };
        }
    }
    const response = {
        status: status || 500,
        msg: msg || "Internal Server Error",
        error
    };

    return response;
};

export const successResponse = (
    msg: string,
    status: number,
    data?: object
): CustomResponse => {
    const response = {
        status: status,
        msg: msg,
        data: data,
    };

    return response;
}

