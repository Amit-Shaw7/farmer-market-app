import { logout } from "@/apiCalls/auth";
import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import { Card } from "@/components/ui/card";
import { accountPageLinks } from "@/constants/links";
import { dummyPng } from "@/development/dummy";
import { AppDispatch } from "@/store/Store";
import { logoutSuccess } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = async () => {
        const response = await logout();
        if (response?.status === 200) {
            dispatch(logoutSuccess());
            navigate("/auth/login", { replace: true });
        }
    }

    return (
        <Container>
            <div className="my-5 flex flex-col gap-5">
                <PageHeading text="Your Account" />
                <div className="grid grid-cols-12 gap-3 px-2 mt-2">
                    {
                        accountPageLinks.map((link) => (
                            <Link className="col-span-6 sm:col-span-4 lg:col-span-3" to={link.href} key={link.href}>
                                <Card className="flex items-center md:items-start gap-2 p-4 rounded-full sm:rounded-md justify-center sm:justify-start">
                                    <img
                                        src={dummyPng}
                                        alt="Orders"
                                        width={50}
                                        height={50}
                                        className="hidden sm:flex h-[50px] w-[50px] object-contain"
                                    />
                                    <div className="flex flex-col gap-1 ">
                                        <h3 className="text-xs sm:text-sm font-semibold">
                                            {link.title}
                                        </h3>
                                        <p className="hidden md:flex text-xs text-muted-foreground break-words">
                                            {link.description}
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        ))
                    }
                    <div className="cursor-pointer col-span-6 sm:col-span-4 lg:col-span-3">
                        <Card className="flex items-center md:items-start gap-2 p-4 rounded-full sm:rounded-md justify-center sm:justify-start">
                            <img
                                src={dummyPng}
                                alt="Orders"
                                width={50}
                                height={50}
                                className="hidden sm:flex h-[50px] w-[50px] object-contain"
                            />
                            <div onClick={handleLogout} className="flex flex-col gap-1 ">
                                <h3 className="text-xs sm:text-sm font-semibold">
                                    Logout
                                </h3>
                                <p className="hidden md:flex text-xs text-muted-foreground break-words">
                                    Logout from the application
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Account;