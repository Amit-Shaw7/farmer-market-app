"use client";
import * as React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import Container from "./Container";

const Navbar = () => {
    return (
        <Container className="backdrop-blur-lg bg-transparent h-[70px] flex items-center w-full justify-between shadow sticky top-0 z-10">
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
        </Container>
    );
};

export default Navbar;
