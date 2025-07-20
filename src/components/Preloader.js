"use client";

import preloader from "@/assets/images/preloader.svg";
import {useEffect, useState} from "react";
import Image from "next/image";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading process
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Fades out after 500ms

        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="loading" style={{ display: loading ? 'block' : 'none' }}>
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div
                        className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                        <Image className="loading-logo" src={preloader} alt="icon" className="h-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}