import axios, { AxiosResponse } from "axios";
import { errorResponse, successResponse } from "@/utils/errors";
import { CustomResponse } from "@/types";
import { instance } from "@/utils/axiosInstance";

type signupDataType = {
    name: string,
    email: string,
    password: string,
    phone: string
};

type loginDataType = {
    email: string,
    password: string
};

export const login = async (data: loginDataType): Promise<CustomResponse | undefined> => {
    const url = `/auth/login`;
    try {
        const response: AxiosResponse = await instance.post(url, data);
        if (response?.status === 200) {
            return successResponse("Logged in Successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }

    return undefined;
};

export const signup = async (data: signupDataType): Promise<CustomResponse | undefined> => {
    const url = `/auth/signup`;
    try {
        const response: AxiosResponse | undefined = await instance.post(url, data);
        if (response?.status === 201) {

            return successResponse("Registered Successfully", 201, response.data.data);
        }
    } catch (error) {
        return errorResponse(400, error);
    }

    return undefined;
};

export const logout = async (): Promise<CustomResponse | undefined> => {
    const url = `/auth/logout`;
    try {
        const response: AxiosResponse | undefined = await instance.get(url);
        if (response?.status === 200) {

            return successResponse("Logged out Successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(400, error);
    }

    return undefined;
};

export const verifyPassword = async (password: string): Promise<CustomResponse | undefined> => {
    const url = `/auth/verify`;
    try {
        const response: AxiosResponse | undefined = await instance.post(url, { password });
        if (response?.status === 200) {
            return successResponse("Password Matched", 200);
        }
    } catch (error) {
        return errorResponse(400, error);
    }

    return undefined;
};

export const resetPassword = async (
    authenticated: boolean,
    password: string,
    token?: string
): Promise<CustomResponse | undefined> => {
    let url = "";
    if (authenticated) {
        url = `/auth/reset-password`;
    } else {
        url = `/auth/reset-password/${token}`;
    }
    try {
        const response: AxiosResponse | undefined = await instance.post(url, { password });
        if (response?.status === 200) {
            return successResponse("Password Reset Succesfully", 200);
        }
    } catch (error) {
        return errorResponse(400, error);
    }

    return undefined;
};

export const forgetPassword = async (email: string): Promise<CustomResponse | undefined> => {
    const url = "/auth/forget-password";
    try {
        const response: AxiosResponse | undefined = await instance.post(url, { email });
        if (response?.status === 200) {
            return successResponse("Reset Password Link Sent Succesfully", 200);
        }
    } catch (error) {
        return errorResponse(400, error);
    }

    return undefined;
};




