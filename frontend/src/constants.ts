import {ShoppingCart} from "lucide-react";

export const categories = [
    {
        img: "https://source.unsplash.com/random/50×50",
        title: "Seeds",
        description: "Seeds are seeds.",
        href: "/seeds",
    },
    {
        img: "https://source.unsplash.com/random/50×50",
        title: "Seeds",
        description: "Seeds are seeds.",
        href: "/seeds",
    },

    {
        img: "https://source.unsplash.com/random/50×50",
        title: "Seeds",
        description: "Seeds are seeds.",
        href: "/seeds",
    },

    {
        img: "https://source.unsplash.com/random/50×50",
        title: "Seeds",
        description: "Seeds are seeds.",
        href: "/seeds",
    },

]

export const navItems = [
    {
        title: "About",
        href: "/about",
        hasChild: false,
    },
    {
        title: "Categories",
        href: "",
        hasChild: true,
        children: categories,
    },
    {
        title: "Contact",
        href: "/contact",
        hasChild: false,
    },
];
