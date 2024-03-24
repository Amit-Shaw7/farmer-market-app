import { CustomResponse } from "@/types";
import { instance } from "@/utils/axiosInstance";
import { errorResponse, successResponse } from "@/utils/errors";
import { AxiosResponse } from "axios";

export const getCart = async (): Promise<CustomResponse | undefined> => {
    const url = `/cart`;
    try {
        const response: AxiosResponse | undefined = await instance.get(url);
        if (response?.status === 200) {
            return successResponse("Cart fetched successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
};

export const addItemToCart = async (productId: string): Promise<CustomResponse | undefined> => {
    const url = `/cart/addToCart`;
    try {
        const response: AxiosResponse | undefined = await instance.put(url , {productId , quantity : 1});
        if (response?.status === 200) {
            return successResponse("Product added to cart successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
};

export const removeItemFromCart = async (productId: string): Promise<CustomResponse | undefined> => {
    const url = `/cart/removeFromCart`;
    try {
        const response: AxiosResponse | undefined = await instance.put(url , {productId});
        if (response?.status === 200) {
            return successResponse("Product removed from cart successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
}