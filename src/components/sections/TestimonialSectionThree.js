"use client";

import testimonialBg from "@/assets/images/bg/testimonial-bg.jpg";
import testimonialLineLeft from "@/assets/images/shape/testimonial-line-left.png";
import testimonialLineRight from "@/assets/images/shape/testimonial-line-right.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {testimonialsOneData} from "@/data/slider";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function TestimonialSectionThree() {
    return (
        <section className="testimonial testimonial-three pt-130 pb-130 bg-image" style={{backgroundImage: `url(${testimonialBg.src})`}}>
            <div className="testimonial-three__shape-left wow slideInLeft" data-wow-duration="1.4s"
                 data-wow-delay="1.4s">
                <Image src={testimonialLineLeft} alt="line-shape" className="h-auto"/>
            </div>
            <div className="testimonial-three__shape-right wow slideInRight" data-wow-duration="1s" data-wow-delay="1s">
                <Image src={testimonialLineRight} alt="line-shape" className="h-auto"/>
            </div>
            <div className="container">
                <div className="testimonial__head-wrp mb-65">
                    <div className="section-header m-0">
                        <h5 className="wow fadeInUp text-white" data-wow-duration="1.2s" data-wow-delay=".2s"> our
                            client’s feedback
                        </h5>
                        <h2 className="wow fadeInUp text-white" data-wow-duration="1.4s" data-wow-delay=".4s">What Our
                            Clients <br/> Say About Us</h2>
                    </div>
                    <div className="dot-wrp wow fadeInUp mt-5 mt-sm-0" data-wow-duration="1.6s" data-wow-delay=".6s">
                        <div className="dot-light testimonial__dot"></div>
                    </div>
                </div>
                <div className="swiper testimonial__slider">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        spaceBetween={30}
                        speed={500}
                        grabCursor={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".testimonial__dot",
                            clickable: true,
                        }}
                        breakpoints={{
                            991: {
                                slidesPerView: 2,
                            },
                            575: {
                                slidesPerView: 1,
                            },
                        }}
                        className="swiper-wrapper"
                    >
                        {testimonialsOneData.map((item) => (
                            <SwiperSlide key={item.id} className="swiper-slide">
                                <div className="testimonial__item">
                                    <div className="testimonial__item-head">
                                        <div className="testimonial__item-head-info">
                                            <div className="testimonial__item-head-info-image">
                                                <Image src={item.image} alt="image" className="h-auto"/>
                                            </div>
                                            <div className="testimonial__item-head-info-con">
                                                <h3>{item.name}</h3>
                                                <span>{item.role}</span>
                                            </div>
                                        </div>
                                        <i className="fa-solid fa-quote-right"></i>
                                    </div>
                                    <div className="testimonial__item-content">
                                        <p>{item.message}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}