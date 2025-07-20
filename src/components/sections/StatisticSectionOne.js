"use client";

import {useEffect, useRef, useState} from "react";
import CountUp from "react-countup";
import statisticImage from "@/assets/images/service/statistic-image.jpg"
import Image from "next/image";

export default function StatisticSectionOne({ customClass }) {
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
        <section className={`statistic-area pt-130 pb-130 ${customClass}`}>
            <div ref={counterRef} className="container">
                <div className="row g-4">
                    <div className="col-xl-6">
                        <div className="image">
                            <Image src={statisticImage} alt="image" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="section-header">
                            <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">Our
                                Statistics</h5>
                            <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Crafting the
                                Ultimate <br/> Realm of EV</h2>
                            <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">It's important to
                                note
                                that tree planting should be carried out thoughtfully, considering factors such as the
                                suitability of tree species to the local ecosystem</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 wow fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                                <div className="statistic__item bg-white bor">
                                    <h2>
                                        <span className="count">
                                            <CountUp start={0} end={25} duration={3} suffix="%" startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>
                                    </h2>
                                    <p>Canec sit amet porttitor massa leo porta maecenas reque.</p>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeInDown" data-wow-duration="1.4s" data-wow-delay=".4s">
                                <div className="statistic__item bg-white bor">
                                    <h2>
                                        <span className="count">
                                            <CountUp start={0} end={19} duration={3} suffix="%" startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>
                                    </h2>
                                    <p>Canec sit amet porttitor massa leo porta maecenas reque.</p>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                                <div className="statistic__item bg-white bor">
                                    <h2>
                                        <span className="count">
                                            <CountUp start={0} end={55} duration={3} suffix="%" startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>
                                    </h2>
                                    <p>Canec sit amet porttitor massa leo porta maecenas reque.</p>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                                <div className="statistic__item bg-white bor">
                                    <h2>
                                        <span className="count">
                                            <CountUp start={0} end={85} duration={3} suffix="K" startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : null} />
                                        </span>
                                    </h2>
                                    <p>Canec sit amet porttitor massa leo porta maecenas reque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}