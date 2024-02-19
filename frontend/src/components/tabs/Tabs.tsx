"use client";
import React from "react";

const Tabs = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="scrollbar-none h-full overflow-y-scroll border-l border-r border-t w-full flex flex-col">
            {children}
        </div>
    );
};

export default Tabs;