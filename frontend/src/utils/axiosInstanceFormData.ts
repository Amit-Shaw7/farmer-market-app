import { backendUrl_v1 } from "@/config";
import axios from "axios";

export const instanceForFormData = axios.create({
    baseURL: backendUrl_v1,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});