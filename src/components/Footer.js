"use client";

import {usePathname} from "next/navigation";
import FooterTwo from "@/components/FooterTwo";
import FooterOne from "@/components/FooterOne";

export default function Footer() {
    const pathname = usePathname();

    return (
        <>
            {pathname === '/home2' ? <FooterTwo /> : <FooterOne />}
        </>
    )
}