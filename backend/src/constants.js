export const DB_NAME = "farmer";
export const defaultAvatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
};
export const MAX_FILE_SIZE = 500000;
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp",];
export const ALLOWED_CATEGORIES = ["Machines", "Equipments", "Seeds", "Fertilizers", "Pesticides", "Fruits", "Vegetables", "Animals", "Cereals", "Diary"];
export const ALLOWED_CATEGORIES_FOR_DEALER = ["Machines", "Equipments", "Seeds", "Fertilizers", "Pesticides"];
export const ALLOWED_CATEGORIES_FOR_SHOPKEEPER = ["Fruits", "Vegetables", "Animals", "Cereals", "Diary"];