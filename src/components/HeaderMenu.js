"use client";

import Link from "next/link";
import { menuItems } from "@/data/menu";
import { useAppContext } from "@/context";
import { useState } from "react";

const HeaderMenu = () => {
    const { isActiveMenu } = useAppContext();
    const [openMenu, setOpenMenu] = useState(null); // Tracks open menu item

    const handleMenuClick = (index) => {
        setOpenMenu(openMenu === index ? null : index); // Toggle menu open/close
    };

    const renderSubMenu = (items, classNames, parentIndex) => {
        return (
            <ul className={`${classNames ? `${classNames}` : 'sub-menu'} ${openMenu === parentIndex ? 'd-block' : ''}`}>
                {items.map((item, index) => (
                    <li key={index} className={item.subMenu ? "sub_menu_wrp d-none d-xl-block" : ""}>
                        {item.subMenu ? (
                            <>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleMenuClick(`${parentIndex}-${index}`);
                                }}>
                                    {item.title} <i className="fas fa-chevron-right float-end"></i>
                                </a>
                                {renderSubMenu(item.subMenu, 'sub_sub_menu', `${parentIndex}-${index}`)}
                            </>
                        ) : (
                            <Link href={item.link}>{item.title}</Link>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <ul className={`main-menu ${isActiveMenu ? 'active' : ''}`}>
            {menuItems.map((item, index) => (
                <li key={index}
                    className={`${openMenu === index.toString() ? 'open' : ''} ${item.isMobile ? 'd-xl-none' : ''}`.trim()}
                >
                    {item.subMenu ? (
                        <>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick(index.toString()); }}>
                                {item.title} {item.icon && <i className={item.icon}></i>}
                            </a>
                            {renderSubMenu(item.subMenu, null, index.toString())}
                        </>
                    ) : (
                        <Link href={item.link}>
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default HeaderMenu;