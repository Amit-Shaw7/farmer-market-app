import * as React from "react";
import { Link } from "react-router-dom";
import { LogInIcon, SearchIcon, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/Store";
import { setSearchText, setSearchedProducts } from "@/store/slices/productSlice";
import { searchProductsUsingQuery } from "@/apiCalls/products";
import { Badge } from "./ui/badge";

const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.user);
    const { cart } = useSelector((state: RootState) => state.cart);
    const { searchText } = useSelector((state: RootState) => state.product);

    const dispatch = useDispatch<AppDispatch>();

    const name = user?.name?.split(" ")[0].charAt(0).toUpperCase();

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(e.target.value));
        const response = await searchProductsUsingQuery(e.target.value);
        if (response?.status === 200) {
            dispatch(setSearchedProducts(response.data));
        }
    };

    return (
        <div className="flex items-center h-max shadow">
            <div className="w-full px-0 md:px-4 lg:px-20">
                <div className="items-center backdrop-blur-lg bg-transparent w-full grid grid-cols-12  sticky top-0 z-10">
                    <div className="col-span-6 md:col-span-3 place-self-start ">
                        <Logo />
                    </div>

                    <div className="col-span-0 md:col-span-5 hidden md:flex h-max">
                        <Search
                            searchText={searchText}
                            searchProducts={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                        />
                    </div>

                    <div className="col-span-6 md:col-span-4 flex items-center gap-4 md:gap-8  place-content-end">
                        <Link to={"/s"}>
                            <SearchIcon className="flex md:hidden w-6 h-6 text-primary" />
                        </Link>
                        {
                            isAuthenticated
                                ?
                                <>
                                    <Link
                                        to={"/cart"}
                                        className="relative"
                                    >

                                        <Badge
                                            className="absolute -top-4 -right-4 h-[20px] flex items-center justify-center w-[20px] rounded-full leading-3 p-1"
                                        >
                                            {cart?.products?.length}
                                        </Badge>
                                        <ShoppingCart className="w-6 h-6 text-primary" />
                                    </Link>
                                    <Link to={"/account"} className="pr-2">
                                        <Avatar>
                                            <AvatarImage src={user?.avatar} />
                                            <AvatarFallback>{name}</AvatarFallback>
                                        </Avatar>
                                    </Link>
                                </>
                                :
                                <Link to={"/auth/login"} className="pr-2">
                                    <LogInIcon className="w-6 h-6 text-primary" />
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
