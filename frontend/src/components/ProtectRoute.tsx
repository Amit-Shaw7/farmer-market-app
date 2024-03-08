"use client";
import { RootState } from "@/store/Store";
import { useRouter } from "next/navigation";
import React, { ReactComponentElement } from "react";
import { useSelector } from "react-redux";
import Redirect from "./Redirect";

const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, isAuthenticated } = useSelector((state: RootState) => state.userSlice);
    return (
        <div>
            {
                isAuthenticated
                    ?
                    <div>
                        {children}
                    </div>
                    :
                    <Redirect url="/login" />
            }
        </div>
    );
};

export default ProtectRoute;