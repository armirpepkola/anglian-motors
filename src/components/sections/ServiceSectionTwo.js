"use client";

import { useState } from "react";
import {servicesTwoData} from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function ServiceSectionTwo() {

    const [activeImage, setActiveImage] = useState(servicesTwoData[0].image);
    const [activeId, setActiveId] = useState(servicesTwoData[0].id);

    const handleMouseEnter = (newImage, id) => {
        setActiveImage(newImage);
        setActiveId(id);
    };

    return (
        <section className="service service-two pt-130 pb-130">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> OUR SERVICE</h5>
                    <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Preserving The Earth For
                        Future <br/>
                        Generations</h2>
                </div>
                <div className="row g-4">
                    <div className="col-xl-6">
                        <div className="service-two__item">
                            {servicesTwoData.map((service) => (
                                <Link
                                    key={`service-${service.id}`}
                                    href="/services/single"
                                    className={`changeImage2 wow fadeInUp ${activeId === service.id ? "clicked" : ""}`}
                                    data-wow-duration={service.delay}
                                    onMouseEnter={() => handleMouseEnter(service.image, service.id)}
                                >
                                    {service.text}
                                    <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInDown" data-wow-duration="1.8s" data-wow-delay=".4s">
                        <div className="image">
                            <Image id="myImage2" src={activeImage} alt="image" className="h-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}