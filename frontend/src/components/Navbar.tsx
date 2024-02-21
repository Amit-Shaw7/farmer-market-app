"use client";
import * as React from "react";
import Link from "next/link";
import { SearchIcon, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();
    const [searchText, setSearchText] = React.useState("");

    const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("running", searchText);
        setSearchText(e.target.value);
    };

    return (
        <div className="flex items-center justify justify-items-center h-max">
            <div className="items-center backdrop-blur-lg bg-transparent w-full grid grid-cols-12 justify-between shadow sticky top-0 z-10">
                <div className="col-span-6 md:col-span-2 place-self-start md:place-self-center">
                    <Logo />
                </div>

                <div className="col-span-0 md:col-span-8 hidden md:flex h-max">
                    <Search searchText={searchText} searchProducts={(e: React.ChangeEvent<HTMLInputElement>) => searchProducts(e)} />
                </div>

                <div className="col-span-6 md:col-span-2 flex items-center gap-4 md:gap-8 md:place-self-center place-content-end">
                    <Link href="/s">
                        <SearchIcon className="flex md:hidden w-6 h-6 text-primary" />
                    </Link>
                    <Link href="/cart">
                        <ShoppingCart className="w-6 h-6 text-primary" />
                    </Link>
                    <Link href="/account" className="pr-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
