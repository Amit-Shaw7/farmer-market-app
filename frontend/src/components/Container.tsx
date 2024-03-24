import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("px-2 sm:px-3 md:px-8 lg:px-24", className)}>
            {children}
        </div>
    );
};

export default Container;