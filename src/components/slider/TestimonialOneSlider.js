"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { testimonialsOneData } from "@/data/slider";
import Image from "next/image";

export default function TestimonialOneSlider() {
    return (
        <>
            <div className="testimonial__head-wrp mb-65">
                <div className="section-header m-0">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">Testimonials
                    </h5>
                    <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">What Our
                        Clients <br/> Say About Us</h2>
                </div>
                <div className="dot-wrp wow fadeInUp mt-5 mt-sm-0" data-wow-duration="1.6s" data-wow-delay=".6s">
                    <div className="dot testimonial__dot"></div>
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
                    {testimonialsOneData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="swiper-slide">
                            <div className="testimonial__item">
                                <div className="testimonial__item-head">
                                    <div className="testimonial__item-head-info">
                                        <div className="testimonial__item-head-info-image">
                                            <Image src={testimonial.image} alt="image" className="h-auto"/>
                                        </div>
                                        <div className="testimonial__item-head-info-con">
                                            <h3>{testimonial.name}</h3>
                                            <span>{testimonial.role}</span>
                                        </div>
                                    </div>
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className="testimonial__item-content">
                                    <p>{testimonial.message}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}