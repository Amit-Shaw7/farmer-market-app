export type CategoryType = {
    id: number;
    img: string;
    name: string;
    query: string;
};

export type ProductType = {
    _id: string;
    name: string;
    description: string;
    price: number;
    pictures: string[];
    stock: number;
    keyFeatures?: string[];
    category: string;
    sellerType: string;
    sellerId: string;
    unit?: string
}

export type AddProductType = {
    name: string;
    description: string;
    price: string;
    category: string;
    stock: string;
    unit : string
}

export type User = {
    _id: string;
    name: string;
    email: string;
    phone: string
    role: string
    businessDocument: string;
    shippingDetails: AddressType;
    isVerified: boolean;
    cartId: string;
    avatar: "";
    createdAt: string;
    updatedAt: string;
}

export type CustomResponse = {
    status: number;
    msg: string;
    data?: User | ProductType | CategoryType | any;
    error?: object;
};

export type CartProductType = {
    productId: string;
    name: string;
    price: number;
    pictures: string[];
    quantity: number;
}

export type CartType = {
    _id: string;
    userId: string;
    products: CartProductType[];
    totalPrice: number;
    deliveryCharge: number;
}

export type OrderType = {
    _id: string;
    userId: string;
    products: string[];
    totalPrice: number;
    deliveryCharge: number;
    orderStatus: string;
    createdAt: string;
    updatedAt: string;
}

export type AddressType = {
    address: string,
    pincode: string,
    state: string,
    city: string
}


// _id
// userId
// products
// totalPrice
// deliveryCharge
// orderStatus
// createdAt
// updatedAt

