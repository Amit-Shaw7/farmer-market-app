import { dummyPng } from "@/development/dummy";

export const footerLinks = [
    {
        heading: "Agrow",
        links: [
            {
                name: "Contact",
                href: "/contact",
            },
            {
                name: "About",
                href: "/about",
            }
        ]
    },
    {
        heading: "Legal",
        links: [
            {
                name: "Terms and conditions",
                href: "/termsandconditions",
            },
            {
                name: "Privacy policy",
                href: "/privacypolicy",
            }
        ]
    },
    {
        heading: "Contact",
        links: [
            {
                name: "bGwYd@example.com",
                href: "mailto:bGwYd@example.com",
            },
            {
                name: "address",
                href: "/address",
            }
        ]
    }
];

export const socialLinks = [
    {
        imgurl: "/social-media/facebook.svg",
        name: "Facebook",
        href: "https://facebook.com",
    },
    {
        imgurl: "/social-media/x.svg",
        name: "X",
        href: "https://twitter.com",
    },
    {
        imgurl: "/social-media/linkedin.svg",
        name: "Linkedin",
        href: "https://linkedin.com",
    },
    {
        imgurl: "/social-media/youtube.svg",
        name: "Youtube",
        href: "https://youtube.com",
    }
];

export const accountPageLinks = [
    {
        title: "Your Orders",
        description: "Track your orders in one place",
        image: dummyPng,
        href: "/account/orders"
    },
    {
        title: "Security",
        description: "Edit your sensitive information",
        image: dummyPng,
        href: "/account/security"
    },
    {
        title: "Your Addresses",
        description: "Edit your addresses for orders",
        image: dummyPng,
        href: "/account/address"
    },
    // {
    //     title: "Payment Details",
    //     description: "Edit your payment details",
    //     image: dummyPng,
    //     href: "/account/payment"
    // },
    {
        title: "Dashboard",
        description: "A short analytics of your activity",
        image: dummyPng,
        href: "/account/dashboard"
    },
    {
        title: "Contact Us",
        description: "Get in touch with us",
        image: dummyPng,
        href: "/contact-us"
    }
];