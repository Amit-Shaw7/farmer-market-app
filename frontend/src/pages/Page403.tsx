import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Page403 = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center gap-3">
            <div className="flex flex-col gap-2 items-center">
                <img
                    height={350}
                    width={350}
                    className="h-[350px] w-350px] object-contain"
                    src="/pages/403.svg"
                    alt="Not allowed"
                    loading="lazy"
                />
                <span className="text-lg font-semibold">You are not allowed to access this page</span>
                <Button
                    variant="link"
                >
                    <Link
                        to="/"
                    >
                        Continue shopping
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Page403;