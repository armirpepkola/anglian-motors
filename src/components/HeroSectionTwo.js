"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import hero3Bg from "@/assets/images/hero/03.jpg";
import {heroSectionTwoSlides} from "@/data/slider";
import Link from "next/link";
import Image from "next/image";

export default function HeroSectionTwo() {
    return (
        <section className="hero-section-2 hero-2">
            <button className="image-arry banner-three__arry-prev">
                <i className="fa-light fa-chevron-left"></i>
            </button>
            <button className="image-arry banner-three__arry-next">
                <i className="fa-light fa-chevron-right"></i>
            </button>
            <div className="swiper hero-slider-2">
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    loop={true}
                    slidesPerView={1}
                    effect={'fade'}
                    speed={500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".banner-three__arry-next",
                        prevEl: ".banner-three__arry-prev",
                    }}
                    className="swiper-wrapper"
                >
                    {heroSectionTwoSlides.map((hero) => (
                        <SwiperSlide key={`hero-${hero.id}`} className="swiper-slide">
                            <div className="hero-items">
                                <div className="hero-bg bg-cover"
                                     style={{ backgroundImage: `url(${hero.background.src})`}}></div>
                                <div className="container">
                                    <div className="row align-items-end justify-content-center">
                                        <div className="col-xl-8">
                                            <div className="hero-content">
                                                <h6 data-animation="fadeInUp" data-delay="1.2s">
                                                <span className="icon-1">
                                                    <Image src={hero.icon1} alt="img" className="h-auto"/>
                                                </span>
                                                    Properly Run Way
                                                    <span className="icon-2">
                                                    <Image src={hero.icon2} alt="img" className="h-auto"/>
                                                </span>
                                                </h6>
                                                <h1 data-animation="fadeInUp" data-delay="1.4s">
                                                    {hero.title}
                                                </h1>
                                                <p data-animation="fadeInUp" data-delay="1.6s">
                                                    {hero.text}
                                                </p>
                                                <a href="/about" data-animation="fadeInUp" data-delay="1.8s"
                                                   className="btn-one"><span>{hero.btnText}</span> <i
                                                    className="fa-solid fa-angles-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-box-items">
                                    <div className="content">
                                        <p>
                                            There are many varitis of passages of Lorem Ipsvae, but the majority have
                                            suffered alteration
                                        </p>
                                        <Link href="/services/single" className="links">Download Now</Link>
                                    </div>
                                    <div className="thumb">
                                        <Image src={hero3Bg} alt="img" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}