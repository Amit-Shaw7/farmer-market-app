export type CategoryType = {
    img: string,
    name: string,
    query: string,
};

export type ProductType = {
    _id: string,
    name: string,
    description: string,
    price: number,
    pictures: string[],
    stock: number,
    keyFeatures?: string[],
    category: string,
    sellerType: string,
    sellerId: string
}

export type User = {
    _id: string,
    name: string,
    email: string,
    phone: string
    role: string
    businessDocument : string,
    shippingDetails : string,
    isVerified : boolean,
    cartId: string,
    avatar : ""
}

export type CustomResponse = {
    status: number;
    msg: string;
    data?: User | ProductType | CategoryType | any;
    error?: {};
};

