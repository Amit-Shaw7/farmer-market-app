import Image from "next/image";
import Link from "next/link";
import React from "react";
const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center justify-center h-[80px] w-[80px] rounded-full"
        >
            <Image
                src="/logo/Logo.png"
                alt="Agrow"
                height={80}
                width={80}
                priority
                className="object-cover h-full w-full"
            />
        </Link>
    );
};

export default Logo;