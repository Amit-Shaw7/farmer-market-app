import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { backendUrl_v1 } from "@/config";
import { errorResponse, successResponse } from "@/utils/errors";
import { CustomResponse } from "@/types";

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
    const url = `${backendUrl_v1}/auth/login`;
    try {
        const response: AxiosResponse = await axios.post(url, data);
        if (response?.status === 200) {
            return successResponse("Logged in Successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }

    return undefined;
};

export const signup = async (data: signupDataType): Promise<CustomResponse | undefined> => {
    console.log("Running signup api call");
    const url = `${backendUrl_v1}/auth/signup`;
    try {
        const response: AxiosResponse | undefined = await axios.post(url, data);

        console.log("-------------------------------");

        console.log(response);
        console.log("-------------------------------");
        if (response?.status === 201) {

            return successResponse("Registered Successfully", 201, response.data.data);
        }
    } catch (error) {
        return errorResponse(400, error);
    }

    return undefined;
};

