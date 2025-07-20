"use client";

import { createContext, useState, useContext, useEffect, useCallback } from "react";

const AppContext = createContext(null);

export function AppWrapper({ children }) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handleHeaderMenuClick = () => {
        setIsActiveMenu(!isActiveMenu); // Toggle the active state
    };

    const handleOpenSidebarClick = () => {
        setIsSidebarVisible(true);
    };

    const handleCloseSidebarClick = () => {
        setIsSidebarVisible(false);
    };

    return (
        <AppContext.Provider value={{
            isSidebarVisible,
            handleOpenSidebarClick,
            handleCloseSidebarClick,
            isActiveMenu,
            handleHeaderMenuClick,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}