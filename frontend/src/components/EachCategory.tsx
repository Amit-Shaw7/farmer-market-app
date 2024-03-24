import {Link} from "react-router-dom";
import { CategoryType } from "@/types";

interface CategoryProps {
  category: CategoryType
}

const EachCategory = ({ category }: CategoryProps) => {
  return (
    <Link to={`/category/${category.query}`}>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className={`w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] md:p-2 flex flex-col items-center justify-center`}>
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/240092a.jpg?ts=1687324818"
            alt="Agrow"
            height={70}
            width={70}
            loading="lazy"
            className="object-cover h-full w-full"
          />
        </div>
        <p className="tracking-tighter sm:tracking-normal text-xs md:text-sm font-semibold ">{category.name}</p>
      </div>
    </Link>
  );
};

export default EachCategory;