"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {testimonialsTwoData} from "@/data/slider";
import {Autoplay, Pagination} from "swiper/modules";
import Image from "next/image";

export default function TestimonialSectionTwo() {
    return (
        <section className="testimonial-two pt-130">
            <div className="container">
                <div className="testimonial-two__wrp bor border-radius-10">
                    <div className="testimonial__head-wrp bor-bottom pb-65 pt-65 pl-65 pr-65">
                        <div className="section-header m-0">
                            <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> our client’s
                                feedback
                            </h5>
                            <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Love From Clients
                            </h2>
                        </div>
                        <div className="dot-wrp wow fadeInUp mt-5 mt-sm-0" data-wow-duration="1.6s"
                             data-wow-delay=".6s">
                            <div className="dot testimonial-two__dot"></div>
                        </div>
                    </div>
                    <div className="pt-45 pb-45 pr-55">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-lg-7">
                                <div className="swiper testimonial-two__slider">
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        loop={true}
                                        spaceBetween={20}
                                        speed={500}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            el: ".testimonial-two__dot",
                                            clickable: true,
                                        }}
                                        className="swiper-wrapper"
                                    >
                                        {testimonialsTwoData.map((testimonial) => (
                                            <SwiperSlide key={`test-${testimonial.id}`} className="swiper-slide">
                                                <div className="testimonial-two__item pl-65">
                                                    <div className="testi-header mb-50">
                                                        <div className="testi-content">
                                                            <h3>{testimonial.name}</h3>
                                                            <span>{testimonial.role}</span>
                                                        </div>
                                                        <i className="fa-solid fa-quote-right"></i>
                                                    </div>
                                                    <p>{testimonial.message}</p>
                                                    <div className="star mt-50">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-two__image">
                                    <div className="swiper testimonial-two__slider">
                                        <Swiper
                                            modules={[Autoplay, Pagination]}
                                            loop={true}
                                            spaceBetween={20}
                                            speed={500}
                                            autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }}
                                            pagination={{
                                                el: ".testimonial-two__dot",
                                                clickable: true,
                                            }}
                                            className="swiper-wrapper"
                                        >
                                            {testimonialsTwoData.map((testimonial) => (
                                            <SwiperSlide key={`test2-${testimonial.id}`} className="swiper-slide">
                                                <Image src={testimonial.image} alt="image" className="h-auto"/>
                                            </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}