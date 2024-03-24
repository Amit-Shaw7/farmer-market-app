import { CustomResponse } from "@/types";
import { instance } from "@/utils/axiosInstance";
import { errorResponse, successResponse } from "@/utils/errors";
import  { AxiosResponse } from "axios";

type validateOtpDataType = {
    otp: string
}

export const validateOtp = async (data: validateOtpDataType, userId: string): Promise<CustomResponse | undefined> => {
    const url = `/otp/validate/${userId}`;
    try {
        const response: AxiosResponse = await instance.post(url, data);
        if (response?.status === 200) {
            return successResponse("OTP Verified Successfully", 200);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
};

export const resendOtp = async (userId: string): Promise<CustomResponse | undefined> => {
    const url = `/otp/resend/${userId}`;
    try {
        const response: AxiosResponse = await instance.post(url);
        if (response?.status === 200) {
            return successResponse("OTP sent succesfullyy", 200);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
};