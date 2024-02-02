import { ALLOWED_CATEGORIES_FOR_DEALER, ALLOWED_CATEGORIES_FOR_FARMER } from "../constants.js";

const isCategoryValid = (category, role) => {
    if (role === "DEALER") {
        return ALLOWED_CATEGORIES_FOR_DEALER.includes(category);
    } else {
        return ALLOWED_CATEGORIES_FOR_FARMER.includes(category);
    }
};

export default isCategoryValid;