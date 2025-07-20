"use client";

import logo from "@/assets/images/logo/logo.svg";
import {useEffect, useState} from "react";
import HeaderTop from "@/components/HeaderTop";
import Link from "next/link";
import HeaderMenu from "@/components/HeaderMenu";
import Image from "next/image";

export default function HeaderTwo() {

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
        <header className="header-three">
            <div className="container">
                <div className="header-three__wrp">
                    <div className="header">
                        <HeaderTop />
                        <div className={`header-section ${isFixed ? "menu-fixed animated fadeInDown" : "slideInUp"}`}>
                            <div className="container pe-0">
                                <div className="header-wrapper pe-4 pe-xl-0">
                                    <div className="logo-menu">
                                        <Link href="/" className="logo">
                                            <Image src={logo} alt="logo" className="h-auto"/>
                                        </Link>
                                    </div>
                                    <div className="header-bar d-xl-none">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <HeaderMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}