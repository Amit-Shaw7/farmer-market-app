import { CategoryType } from "@/types";
import Image from "next/image";
import React from "react";

interface CategoryProps {
  category: CategoryType
}

const Category = ({ category }: CategoryProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className={`w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] md:p-2 flex flex-col items-center justify-center`}>
        <Image
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/240092a.jpg?ts=1687324818"
          alt="Agrow"
          height={70}
          width={70}
          priority
          className="object-cover h-full w-full"
        />
      </div>
      <p className="tracking-tighter sm:tracking-normal text-xs md:text-sm font-semibold ">{category.name}</p>
    </div>
  );
};

export default Category;