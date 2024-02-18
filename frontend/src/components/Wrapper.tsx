import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:px-18 md:px-10">
            {children}
        </div>
    );
};

export default Wrapper;