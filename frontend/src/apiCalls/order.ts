import { backendUrl_v1 } from "@/config";
import { razorpayOptions } from "@/constants/razorpay-options";
import { CustomResponse, User } from "@/types";
import { instance } from "@/utils/axiosInstance";
import { errorResponse, successResponse } from "@/utils/errors";
import { AxiosResponse } from "axios";

export const createOrderWithRazorpay = async (user: User, cartId: string): Promise<CustomResponse | undefined> => {
    const url = `/payment/checkout`;
    try {
        const response: AxiosResponse | undefined = await instance.post(url, { cartId });
        if (response?.status === 200) {

            const options = {
                ...razorpayOptions,
                prefill: {
                    name: user.name,
                    email: user.email,
                },
                amount: response.data.data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                order_id: response.data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: `${backendUrl_v1}/payment/verify-payment?cartId=${cartId}&userId=${user._id}`,
            }

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
            return successResponse("Order Placed successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
};

export const createOrderWithCOD = async (): Promise<CustomResponse | undefined> => {
    const url = `/order/createorder`;
    try {
        const response: AxiosResponse | undefined = await instance.post(url);
        if (response?.status === 200) {
            return successResponse("Order Placed successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
}

export const getUserOrders = async (): Promise<CustomResponse | undefined> => {
    const url = `/order/myorders`;
    try {
        const response: AxiosResponse | undefined = await instance.get(url);
        if (response?.status === 200) {
            return successResponse("Order fetched successfully", 200, response.data.data);
        }
    } catch (error) {
        return errorResponse(401, error);
    }
    return undefined;
};

// export const verifyPayment = async (
//     razorpay_order_id: string,
//     razorpay_payment_id: string,
//     razorpay_signature: string,
//     options: any,
//     cartId
// ) => {
//     const url = `/payment/verify`;
//     try {
//         const response: AxiosResponse | undefined = await instance.post(
//             url,
            
//         );
//         if (response?.status === 200) {
//             return successResponse("Order fetched successfully", 200, response.data.data);
//         }
//     } catch (error) {
//         return errorResponse(401, error);
//     }
//     return undefined;
// }
