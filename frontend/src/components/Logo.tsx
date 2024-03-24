import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link
            to={"/"}
            className="flex items-center justify-center h-[80px] w-[80px] rounded-full"
        >
            <img
                src="/logo/Logo.png"
                alt="Agrow"
                height={80}
                width={80}
                loading="lazy"
                className="object-cover h-full w-full"
            />
        </Link>
    );
};

export default Logo;