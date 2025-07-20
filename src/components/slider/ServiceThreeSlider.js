"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {serviceThreeData} from "@/data/slider";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

export default function ServiceThreeSlider() {
    return (
        <>
            <div className="swiper service-three__slider">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    spaceBetween={30}
                    speed={1000}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".service-three__dot",
                        clickable: true,
                    }}
                    breakpoints={{
                        991: { slidesPerView: 2 },
                        575: { slidesPerView: 1 },
                    }}
                    className="swiper-wrapper"
                >
                    {serviceThreeData.map((service) => (
                        <SwiperSlide key={service.number} className="swiper-slide">
                            <div className="service-three__item">
                                <div className="image">
                                    <Image src={service.image} alt="image" className="h-auto"/>
                                </div>
                                <h2 className="stroke-number">{service.number}</h2>
                                <div className="info">
                                    <h4><Link href="/services/single">{service.title}</Link></h4>
                                    <Link className="service-three__btn" href="/services/single">{service.btnText} <i
                                        className="fa-solid ps-2 fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="dot-wrp wow fadeInUp text-center mt-60" data-wow-duration="1.6s" data-wow-delay=".6s">
                <div className="dot service-three__dot"></div>
            </div>
        </>
    )
}