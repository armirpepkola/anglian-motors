"use client";

import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {projectBanners} from "@/data/project";

export default function ProjectBannerSection() {
    return (
        <section className="project-banner pt-130 pb-130">
            <div className="container">
                <div className="banner-three banner-five">
                    <div className="swiper banner-three__slider banner-five__slider">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            speed={2000}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".arry-next",
                                prevEl: ".arry-prev",
                            }}
                            className="swiper-wrapper"
                        >
                            {projectBanners.map((banner) => (
                                <SwiperSlide
                                    key={banner.id}
                                    className="swiper-slide"
                                >
                                    <div className="slide-bg project-banner__bg" style={{ backgroundImage: `url(${banner.background.src})`}}></div>
                                    <div className="container">
                                        <div className="banner-three__content project-banner__content banner-five__content">
                                            <h2 className="text-white" data-animation="fadeInUp" data-delay="1s" dangerouslySetInnerHTML={{__html: banner.title}}></h2>
                                            <div className="about-two__right-item" data-animation="fadeInUp"
                                                 data-delay="1.4s">
                                                <div className="about_info d-flex align-items-center pt-65">
                                                    <Link href="/about" className="btn-one-light"><span>contact us</span>
                                                        <i className="fa-solid fa-angles-right"></i>
                                                    </Link>
                                                    <span className="bor-left d-none d-sm-block mx-4"></span>
                                                    <div className="info d-flex flex-wrap align-items-center">
                                                        <i className="fa-solid bg-white border-0 fa-phone-volume ring-animation"></i>
                                                        <div className="about_info_con">
                                                            <span className="d-block text-capitalize text-white">call any time</span>
                                                            <a className="text-white" href="tel:+912659302003">+91 2659 302 003</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="banner-five__arry-btn">
                        <button className="arry-prev mb-15 banner-five__arry-prev"><i
                            className="fa-light fa-chevron-left"></i></button>
                        <button className="arry-next banner-five__arry-next"><i
                            className="fa-light fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}