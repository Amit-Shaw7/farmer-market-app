import { AddressType, CustomResponse } from "@/types";
import { instance } from "@/utils/axiosInstance";
import { errorResponse, successResponse } from "@/utils/errors";
import axios, { AxiosResponse } from "axios";

export const fetchUser = async (): Promise<CustomResponse | undefined> => {
    const url = `user/profile`;
    try {
        const response: AxiosResponse | undefined = await instance.get(url);
        if (response?.status === 200) {
            return successResponse("Logged in Successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
};

export const setUserAddress = async (data: AddressType): Promise<CustomResponse | undefined> => {
    const url = `user/address`;
    try {
        const response: AxiosResponse | undefined = await instance.put(url , data);
        if (response?.status === 200) {
            return successResponse(response?.data.msg, response?.status, response?.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
};

export const getCityAndState = async (pincode: string): Promise<CustomResponse | undefined> => {
    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    try {
        const response: AxiosResponse | undefined = await axios.get(url);
        if (response?.status === 200) {
            if (response.data[0]?.PostOffice === null || response.data[0].PostOffice.length === 0) {
                return errorResponse(400, "Invalid Pincode");
            }
            const data = {
                state: response?.data[0].PostOffice[0].State,
                city: response?.data[0].PostOffice[0].District
            };
            return successResponse("Logged in Successfully", 200, data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
}