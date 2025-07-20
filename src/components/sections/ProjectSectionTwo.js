"use client";

import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {projectImages, projectOneInfos} from "@/data/slider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function ProjectSectionTwo() {
    return (
        <section className="project project-right sub-bg pt-130 pb-130">
            <div className="project__wrp">
                <div className="swiper have-bg project-slider d-none d-lg-block">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".pegi-number",
                            type: "fraction",
                        }}
                        navigation={{
                            nextEl: ".project-arry-next",
                            prevEl: ".project-arry-prev",
                        }}
                        className="swiper-wrapper"
                    >
                        {projectImages.map((image, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <div className="project__image bg-image"
                                     style={{backgroundImage: `url(${image.src})`}}>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-lg-6 ps-4 bor-right py-lg-5">
                            <div className="section-header pr-20">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> OUR case
                                    study</h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Successfully
                                    completed projects for our clients</h2>
                                <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">we are an
                                    organization engaged in "Tree Planting" activities, therefore you can "Donate Trees.
                                    We also join in
                                    "Community Forestry | Reforestation" to keep <br/> the earth together so that it
                                    remains
                                    sustainable.</p>
                            </div>
                            <div className="arry-btn mb-4 d-block d-lg-none">
                                <button className="arry-prev project-arry-prev"><i
                                    className="fa-light fa-chevron-left"></i></button>
                                <button className="ms-3 active arry-next project-arry-next"><i
                                    className="fa-light fa-chevron-right"></i></button>
                            </div>
                            <div className="row g-3">
                                <div className="col-sm-4">
                                    <div className="wrp">
                                        <div className="pegi-number pt-4">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="swiper project-slider2">
                                        <Swiper
                                            modules={[Autoplay, Pagination, Navigation]}
                                            spaceBetween={20}
                                            speed={2000}
                                            simulateTouch={true}
                                            loop={true}
                                            autoplay={{
                                                delay: 5000,
                                                disableOnInteraction: false,
                                            }}
                                            pagination={{
                                                el: ".pegi-number",
                                                type: "fraction",
                                            }}
                                            navigation={{
                                                nextEl: ".project-arry-next",
                                                prevEl: ".project-arry-prev",
                                            }}
                                            className="swiper-wrapper"
                                        >
                                            {projectOneInfos.map((project) => (
                                                <SwiperSlide key={project.id}>
                                                    <div className="project__item">
                                                        <h3>{project.title}</h3>
                                                        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="arry-btn mt-65 d-none d-lg-block">
                                <button className="arry-prev project-arry-prev"><i
                                    className="fa-light fa-chevron-left"></i></button>
                                <button className="ms-3 active arry-next project-arry-next"><i
                                    className="fa-light fa-chevron-right"></i></button>
                            </div>
                            <div className="col-lg-6">
                                <div className="swiper project-slider mt-5 d-block d-lg-none">
                                    <Swiper
                                        modules={[Autoplay, Pagination, Navigation]}
                                        spaceBetween={30}
                                        speed={2000}
                                        loop={true}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            el: ".pegi-number",
                                            type: "fraction",
                                        }}
                                        navigation={{
                                            nextEl: ".project-arry-next",
                                            prevEl: ".project-arry-prev",
                                        }}
                                        className="swiper-wrapper"
                                    >
                                        {projectImages.map((image, index) => (
                                            <SwiperSlide key={index} className="swiper-slide">
                                                <div className="image">
                                                    <Image src={image} alt="image" className="h-auto"/>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}