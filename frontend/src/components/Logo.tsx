import Image from "next/image";
import React from "react";
const Logo = () => {
    return (
        <div className="flex items-center justify-center h-[80px] w-[80px] rounded-full">
            <Image
                src="/logo/Logo.png"
                alt="Agrow"
                height={80}
                width={80}
                priority
                className="object-cover h-full w-full"
            />
        </div>
    )
}

export default Logo;