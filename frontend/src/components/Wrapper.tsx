import React from "react";

const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`g:px-18 md:px-10 ${className}`}>
            {children}
        </div>
    );
};

export default Wrapper;