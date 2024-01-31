import { ALLOWED_CATEGORIES_FOR_DEALER, ALLOWED_CATEGORIES_FOR_SHOPKEEPER } from "../constants.js";

const isCategoryValid = (category, role) => {
    if (role === "Dealer") {
        return ALLOWED_CATEGORIES_FOR_DEALER.includes(category);
    } else {
        return ALLOWED_CATEGORIES_FOR_SHOPKEEPER.includes(category);
    }
};

export default isCategoryValid;