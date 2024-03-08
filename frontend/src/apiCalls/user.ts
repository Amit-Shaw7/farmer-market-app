import { backendUrl_v1 } from "@/config";
import { CustomResponse } from "@/types";
import { errorResponse, successResponse } from "@/utils/errors";
import axios, { AxiosResponse } from "axios";

export const fetchUser = async (): Promise<CustomResponse | undefined> => {
    const url = `${backendUrl_v1}/user/profile`;
    try {
        const response: AxiosResponse | undefined = await axios.get(url);
        if (response?.status === 200) {
            return successResponse("Logged in Successfully", 200);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
}