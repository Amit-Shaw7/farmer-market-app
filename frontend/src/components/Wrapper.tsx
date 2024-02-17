import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:px-18 md:px-10">
            {children}
        </div>
    )
}