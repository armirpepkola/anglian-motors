"use client";

import achieveBg from "@/assets/images/bg/achievement-bg-image.jpg";
import achievementBg from "@/assets/images/bg/achievement-bg.jpg";
import Link from "next/link";
import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function AchievementSectionFive({ customClass }) {
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
        <section ref={counterRef} className={`achievement-five ${customClass}`}>
            <div className="container">
                <div className="achievement-five__wrp bg-image" style={{ backgroundImage: `url(${achievementBg.src})`}}>
                    <div className="row g-4 align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <div className="achievement-five__item">
                                <h3 className="wow fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">What have
                                    we
                                    achieved so far?</h3>
                                <Link href="/team" className="btn-two-light wow fadeInUp mt-50"
                                   data-wow-duration="1.2s"
                                   data-wow-delay=".2s"><span>join our team</span> <i
                                    className="fa-solid fa-angles-right"></i>
                                </Link>

                            </div>
                        </div>
                        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                            <div className="achievement-five__count">
                                <h2 className="count">
                                    <CountUp start={0} end={120} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </h2>
                                <h5>Social activism projects
                                    accomplished</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                            <div className="achievement-five__count">
                                <h2 className="count">
                                    <CountUp start={0} end={90} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </h2>
                                <h5>Communities in
                                    environment</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                            <div className="achievement-five__count">
                                <h2 className="count">
                                    <CountUp start={0} end={75} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                </h2>
                                <h5>Team members activate <br/>
                                    in nature</h5>
                            </div>
                        </div>
                    </div>
                    <div className="achievement-five__bg-overlay">
                        <Image src={achieveBg} alt="image" className="h-auto"/>
                    </div>
                </div>
            </div>
        </section>
    )
}