import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
    children: React.ReactNode,
    className?: string
};

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("px-1 xs:px-0 sm:px-4 md:px-12 lg:px-20", className)}>
            {children}
        </div>
    );
};

export default Container;