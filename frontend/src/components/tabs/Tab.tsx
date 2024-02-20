import { dummy } from "@/development/dummy";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TabProps {
    selected?: boolean,
    href: string,
    image?: string,
    name: string
}

const Tab = ({ selected, href, image, name }: TabProps) => {
    return (
        <Link href={href} className="w-full">
            <div
                id={`tab-${name}`}
                className={`
                    ${selected ? "border-l-4 border-l-primary bg-cream" : "mx-1"} 
                    border-b 
                    px-4 
                    py-3
                    flex 
                    flex-col md:flex-row
                    items-center 
                    gap-1 md:gap-3
                `}
            >
                {image
                    &&
                    <Image
                        src={image}
                        alt={name || "Some img"}
                        height={50}
                        width={50}
                        className="h-[50px] w-[40px]"
                    />
                }

                <p className={`
                    ${selected ? "font-medium md:font-semibold" : "font-normal md:font-medium"}  
                    text-xs md:text-sm lg:text-base 
                    break-all xs:break-words 
                    text-center
                `}
                >
                    {name}
                </p>
            </div>
        </Link>
    );
};

export default Tab;