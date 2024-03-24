import { RootState } from "@/store/Store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "./Loading";

const ProtectRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.user);
    const { mounted } = useSelector((state: RootState) => state.app);

    if (!mounted) {
        return <Loading />
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />
    }

    const isAllowed = allowedRoles.includes(user?.role);

    if (!isAllowed) {
        return <Navigate to="/forbidden" />
    }

    return (
        <>
            <Outlet />
        </ >
    );
};

export default ProtectRoute;