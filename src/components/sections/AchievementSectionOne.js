"use client";

import achieve1Image from "@/assets/images/icon/achieve1.png";
import achieve2Image from "@/assets/images/icon/achieve2.png";
import achieve3Image from "@/assets/images/icon/achieve3.png";
import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function AchievementSectionOne({ title, bgImage}) {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true); // Start counting when in viewport
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <section ref={counterRef} className="achievement" style={{ backgroundImage: `url(${bgImage.src})`}}>
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-5 achievement__bor-right wow fadeInUp" data-wow-duration="1.2s"
                         data-wow-delay=".2s">
                        <div className="achievement__item">
                            <h2 className="text-white pt-3 pb-3">{title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-2 achievement__bor-right wow fadeInUp" data-wow-duration="1.4s"
                         data-wow-delay=".4s">
                        <div className="achievement__item text-center">
                            <Image src={achieve1Image} alt="icon" className="h-auto"/>
                            <h5>Satisfied Clients</h5>
                            <span className="count">
                                <CountUp start={0} end={6472068} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-2 achievement__bor-right wow fadeInUp" data-wow-duration="1.6s"
                         data-wow-delay=".6s">
                        <div className="achievement__item text-center">
                            <Image src={achieve2Image} alt="icon" className="h-auto"/>
                            <h5>Kms Driven</h5>
                            <span className="count">
                                <CountUp start={0} end={38768} duration={3}  startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-2 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                        <div className="achievement__item text-center">
                            <Image src={achieve3Image} alt="icon" className="h-auto"/>
                            <h5>Quality Services</h5>
                            <span className="count">
                                <CountUp start={0} end={1193210} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}