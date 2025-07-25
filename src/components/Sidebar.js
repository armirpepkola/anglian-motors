"use client";

import logoMix from "@/assets/images/logo/logo-mix.svg";
import {useAppContext} from "@/context";
import Image from "next/image";

export default function Sidebar() {
    const {isSidebarVisible, handleCloseSidebarClick} = useAppContext();

    return (
        <div id="targetElement" className={`side_bar slideInRight ${!isSidebarVisible ? 'side_bar_hidden' : ''}`}>
            <div className="side_bar_overlay" onClick={handleCloseSidebarClick}></div>
            <div className="logo mb-30">
                <Image src={logoMix} alt="logo" className="h-auto"/>
            </div>
            <p className="text-justify">The foundation of any road is the subgrade, which provides a stable base for the
                road
                layers above. Proper compaction of
                the subgrade is crucial to prevent settling and ensure long-term road stability.</p>
            <ul className="info py-4 mt-65 bor-top bor-bottom">
                <li><i className="fa-solid primary-color fa-location-dot"></i> <a href="#0">example@example.com</a>
                </li>
                <li className="py-4"><i className="fa-solid primary-color fa-phone-volume"></i> <a
                    href="tel:+912659302003">+91 2659
                    302 003</a>
                </li>
                <li><i className="fa-solid primary-color fa-paper-plane"></i> <a href="#0">info.company@gmail.com</a>
                </li>
            </ul>
            <div className="social-icon mt-65">
                <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#0"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <button id="closeButton" className="text-white" onClick={handleCloseSidebarClick}><i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}