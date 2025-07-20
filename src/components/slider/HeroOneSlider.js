"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import slider1 from "@/assets/images/hero/slider-1.jpg";
import slider2 from "@/assets/images/hero/slider-2.jpg";
import slider3 from "@/assets/images/hero/slider-3.jpg";
import Link from "next/link";
import Image from "next/image";

export default function HeroOneSlider() {
    return (
        <div className="slider-image-items">
            <div className="swiper hero-slider">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    speed={2000}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".hero-dot",
                        clickable: true,
                    }}
                    breakpoints={{
                        1199: { slidesPerView: 3 },
                        991: { slidesPerView: 2 },
                        767: { slidesPerView: 2 },
                        575: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="hero-img">
                            <Image src={slider1} alt="img" className="h-auto"/>
                            <Link href="/services/single" className="link">
                                Read More <i className="fa-solid fa-chevrons-right"></i>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="hero-img">
                            <Image src={slider2} alt="img" className="h-auto"/>
                            <Link href="/services/single" className="link">
                                Read More <i className="fa-solid fa-chevrons-right"></i>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="hero-img">
                            <Image src={slider3} alt="img" className="h-auto"/>
                            <Link href="/services/single" className="link">
                                Read More <i className="fa-solid fa-chevrons-right"></i>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="hero-img">
                            <Image src={slider3} alt="img" className="h-auto"/>
                            <Link href="/services/single" className="link">
                                Read More <i className="fa-solid fa-chevrons-right"></i>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hero-dot text-center mt-5"></div>
                <div className="pagination-class swiper-pagination"></div>
            </div>
        </div>
    )
}