export const allCategories = [
    {
        id: 0,
        name: "Fruits",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/1.png?raw=true",
        query: "fruits"
    },
    {
        id: 1,
        name: "Vegetables",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/2.png?raw=true",
        query: "vegetables"
    },
    {
        id: 2,
        name: "Cereals",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/3.png?raw=true",
        query: "cereals"
    },
    {
        id: 3,
        name: "Dairy",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/4.png?raw=true",
        query: "dairy"
    },
    {
        id: 4,
        name: "Machines",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/1.png?raw=true",
        query: "machines"
    },
    {
        id: 5,
        name: "Equipments",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/2.png?raw=true",
        query: "equipments"
    },
    {
        id: 6,
        name: "Fertilizers",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/3.png?raw=true",
        query: "fertilizers"
    },
    {
        id: 7,
        name: "Pesticides",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/3.png?raw=true",
        query: "pesticides"
    },
    {
        id: 8,
        name: "Seeds",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/3.png?raw=true",
        query: "seeds"
    },
    {
        id: 9,
        name: "Animals",
        img: "github.com/muhammederdem/mini-organic-fruit-and-vegetable-store/blob/main/src/assets/images/products/3.png?raw=true",
        query: "animals"
    }
];

export const productCategoriesForShopkeeper = allCategories.slice(0, 4);
export const productCategoriesForFarmer = allCategories;
export const productCategoriesForDealer = allCategories.slice(4 , allCategories.length);

export const productCategoriesFarmerCanSell = allCategories.slice(0, 4);
export const productCategoriesDealerCanSell = allCategories.slice(5, allCategories.length);
export const productCategoriesShopkeeperCanSell = [];