import { backendUrl_v1 } from "@/config";
import axios from "axios";

export const instance = axios.create({
    baseURL: backendUrl_v1,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});