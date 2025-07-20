'use client';

import { usePathname } from 'next/navigation'
import HeaderThree from "@/components/HeaderThree";

import HeaderTwo from "@/components/HeaderTwo";
import HeaderOne from "@/components/HeaderOne";

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            {pathname === '/' && <HeaderOne />}
            {pathname === '/home2' && <HeaderTwo />}
            {pathname !== '/' && pathname !== '/home2' && <HeaderThree />}
        </>
    )
}