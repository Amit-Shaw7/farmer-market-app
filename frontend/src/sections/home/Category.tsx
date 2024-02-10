import { CategoryType } from "@/types";
import Image from "next/image";
import React from "react";

interface CategoryProps {
  category: CategoryType
}

const Category = ({ category }: CategoryProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className={`rounded-md md:rounded-full bg-[#EDF5FF] w-[50px] h-[50px] md:w-[120px] md:h-[120px] md:p-2 flex flex-col items-center justify-center`}>
        <Image
          src="/logo/Logo.png"
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