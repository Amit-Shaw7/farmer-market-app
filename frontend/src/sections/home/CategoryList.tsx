import { cn } from "@/lib/utils";
import Category from "@/components/EachCategory";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import SectionHeading from "@/components/SectionHeading";

const CategoryList = ({ className }: { className?: string }) => {
    const { productCategories } = useSelector((state: RootState) => state.user);
    const categories = productCategories;

    return (
        <div className={cn("w-full", className)}>
            <div>
                <SectionHeading text="Categories" showButton={false} />
                <div className="mt-4 w-full grid gap-5 grid-cols-4 xs:grid-cols-5 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-5">
                    {
                        categories?.map((category) => (
                            <Category key={category.id} category={category} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryList;