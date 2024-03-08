import { backendUrl_v1 } from "@/config";
import { CustomResponse } from "@/types";
import { errorResponse, successResponse } from "@/utils/errors";
import axios, { AxiosResponse } from "axios";

type validateOtpDataType = {
    otp: string
}

export const validateOtp = async (data: validateOtpDataType, userId: string): Promise<CustomResponse | undefined> => {
    const url = `${backendUrl_v1}/otp/validate/${userId}`;
    try {
        const response: AxiosResponse = await axios.post(url, data);
        if (response?.status === 200) {
            return successResponse("OTP Verified Successfully", 200);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
};

export const resendOtp = async (userId: string): Promise<CustomResponse | undefined> => {
    const url = `${backendUrl_v1}/otp/resend/${userId}`;
    try {
        const response: AxiosResponse = await axios.post(url);
        if (response?.status === 200) {
            return successResponse("OTP sent succesfullyy", 200);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
};