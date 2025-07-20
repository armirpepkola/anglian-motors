"use client";

import headerDot from "@/assets/images/header/header-dot.png";
import logoLight from "@/assets/images/logo/logo-light.svg";
import headerInfoBg from "@/assets/images/header/header-info-bg.png";
import HeaderMenu from "@/components/HeaderMenu";
import Link from "next/link";
import {useAppContext} from "@/context";
import {useEffect, useState} from "react";
import Image from "next/image";

export default function HeaderOne() {
    const { handleOpenSidebarClick, handleHeaderMenuClick, isActiveMenu } = useAppContext();

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsFixed(true);
                document.body.classList.add("body-padding");
            } else {
                setIsFixed(false);
                document.body.classList.remove("body-padding");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header header-one bor-bottom">
            <div className={`header-section ${isFixed ? "menu-fixed animated fadeInDown" : "slideInUp"}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="header-one__item d-none d-xl-block">
                        <div className="d-flex align-items-center">
                            <div className="header-one__logo">
                                <Link href="/"><Image src={logoLight} alt="logo" className="h-auto"/></Link>
                            </div>
                            <button id="openButton" className="header-one__dots" onClick={handleOpenSidebarClick}>
                                <Image src={headerDot} alt="dots" className="h-auto"/>
                            </button>
                        </div>
                    </div>
                    <div className="header-one__item w-100">
                        <div className="header-wrapper justify-content-center">
                            <div className="logo-menu d-block d-xl-none">
                                <a href="/" className="logo">
                                    <Image src={logoLight} alt="logo" className="h-auto"/>
                                </a>
                            </div>
                            <div className={`header-bar d-xl-none ${isActiveMenu ? 'active' : ''}`} onClick={handleHeaderMenuClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <HeaderMenu />
                        </div>
                    </div>
                    <div className="header-one__item d-none d-xl-block">
                        <ul className="header-wrapper header-one__info bor-left">
                            <li className="menu-btn">
                                <Link href="/contact"><span>Get a quote</span> <i
                                    className="fa-solid fa-angles-right"></i></Link>
                            </li>
                            <li className="menu_info bg-image ms-0"
                                style={{ backgroundImage: `url(${headerInfoBg.src})`}}>
                                <i className="fa-solid call_ico fa-phone-volume"></i>
                                <div className="call_info">
                                    <span>Call Any Time</span>
                                    <a className="d-block p-0" href="tel:+912659302003">+91 2659 302 003</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}