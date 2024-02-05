"use client";
import * as React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";
import Search from "@/components/Search";


const Navbar = () => {
    return (
        <div className="h-[70px] px-4 md:px-12 flex items-center w-full justify-between shadow">
            <Logo />

            <div className="w-[500px] hidden lg:flex">
                <Search />
            </div>

            <div className="flex items-center gap-4 md:gap-8">
                <Link href="/cart">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                </Link>
                <Link href="/cart" className="pr-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
            </div>

        </div>
    )
};

export default Navbar;
