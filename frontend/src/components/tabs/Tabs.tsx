import React, { useCallback, useEffect } from "react";
import {useParams} from "react-router-dom";

const Tabs = ({ children }: { children: React.ReactNode }) => {
    const params = useParams();
    const focusOnSelectedTab = useCallback(() => {
        const tab = document.getElementById(`tab-${params.category}`);
        if (tab) {
            tab.scrollIntoView({ behavior: "smooth" });
        }
    },[params.category]);

    useEffect(() => {
        focusOnSelectedTab();
    },[focusOnSelectedTab]);
    
    return (
        <div className="max-h-[700px] overflow-y-scroll scrollbar-none border-l border-r w-full flex flex-col">
            {children}
        </div>
    );
};

export default Tabs;