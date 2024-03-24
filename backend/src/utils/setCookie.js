import { cookieOptions } from "../constants.js";

export const setCookie = (res, name, value) => {
    res.cookie(String(name), value, cookieOptions);
}