"use client";

import HeaderTop from "@/components/HeaderTop";

import logo from "@/assets/images/logo/logo.svg";
import Link from "next/link";
import {useEffect, useState} from "react";
import HeaderMenu from "@/components/HeaderMenu";
import Image from "next/image";

export default function HeaderThree() {
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
        <header className="header">
            <HeaderTop/>
            <div className={`header-section ${isFixed ? "menu-fixed animated fadeInDown" : "slideInUp"}`}>
                <div className="container">
                    <div className="header-wrapper">
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
        </header>
    )
}