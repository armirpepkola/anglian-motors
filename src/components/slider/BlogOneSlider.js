"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {blogOneData} from "@/data/slider";
import Link from "next/link";
import Image from "next/image";

export default function BlogOneSlider() {
    return (
        <div className="blog__item-left">
            <div className="swiper blog__slider">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    spaceBetween={30}
                    speed={500}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".blog__dot",
                        clickable: true,
                    }}
                    className="swiper-wrapper"
                >
                    {blogOneData.map((post) => (
                        <SwiperSlide key={post.id} className="swiper-slide">
                            <div className="row g-4">
                                <div className="col-md-5">
                                    <div className="blog__item-left-content">
                                        <span className="blog__tag">Environment</span>
                                        <h3><Link href="/blog/single">{post.title}</Link></h3>
                                        <p>{post.description}</p>
                                        <span
                                            className="blog__item-left-content-info">By <strong>{post.author}</strong> {post.created_at}</span>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="image">
                                        <Image src={post.image} alt="image" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="blog__item-left-dot-wrp">
                <div className="dot blog__dot"></div>
            </div>
        </div>
    )
}