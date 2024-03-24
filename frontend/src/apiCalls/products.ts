import { AddProductType, CustomResponse } from "@/types";
import { instance } from "@/utils/axiosInstance";
import { instanceForFormData } from "@/utils/axiosInstanceFormData";
import { errorResponse, successResponse } from "@/utils/errors";
import { AxiosResponse } from "axios";

export const getAllProductsWhenAuthNotDone = async (): Promise<CustomResponse | undefined> => {
    const url = `/product/products`;
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

export const getAllProducts = async (): Promise<CustomResponse | undefined> => {
    const url = `/product/all`;
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

export const getCategoryProducts = async (category: string): Promise<CustomResponse | undefined> => {
    const url = `/product/products?category=${category}`;
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

export const getProductById = async (id: string): Promise<CustomResponse | undefined> => {
    const url = `/product/${id}`;
    try {
        const response: AxiosResponse | undefined = await instance.get(url);
        if (response?.status === 200) {
            return successResponse("Product fetched successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
}

export const searchProductsUsingQuery = async (query: string): Promise<CustomResponse | undefined> => {
    const url = `/product/search?query=${query}`;
    try {
        const response: AxiosResponse | undefined = await instance.get(url);
        if (response?.status === 200) {
            return successResponse("Products fetched successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
}

export const createProduct = async (
    values : AddProductType,
    pictures: File[],
    keyFeatures: string[]
): Promise<CustomResponse | undefined> => {
    const url = `/product/add`;
    const data = new FormData();
    data.append("name", values.name);
    data.append("description", values.description);
    data.append("price", values.price);
    data.append("category", values.category);
    data.append("unit", values.unit);
    data.append("stock", values.stock);
    keyFeatures.forEach((feature) => {
        data.append("keyFeatures[]", feature);
    })
    data.append("pictures", pictures[0]);
    data.append("pictures", pictures[1]);

    
    try {
        const response: AxiosResponse | undefined = await instanceForFormData.post(url , data);
        if (response?.status === 201) {
            return successResponse("Products fetched successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
}