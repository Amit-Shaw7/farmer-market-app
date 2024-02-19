export type CategoryType = {
    img : string,
    name : string,
    query : string,
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