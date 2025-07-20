"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import { blogTwoPosts } from "@/data/slider"
import Link from "next/link";
import Image from "next/image";

export default function BlogTwoSlider() {
    return (
        <div className="swiper blog-two__slider">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                spaceBetween={30}
                speed={500}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".donation__arry-next",
                    prevEl: ".donation__arry-prev",
                }}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                className="swiper-wrapper"
            >
                {blogTwoPosts.map((post) => (
                    <SwiperSlide key={post.id} className="swiper-slide">
                        <div className="donation__item blog-two__item bor">
                            <div className="blog-two__image mb-85">
                                <div className="image">
                                    <Image src={post.thumbnail} alt="image" className="h-auto"/>
                                    <div className="blog-two__info">
                                        <h4 dangerouslySetInnerHTML={{ __html: post.date }}></h4>
                                        <span>{post.year}</span>
                                    </div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/blog/single">{post.title}</Link>
                            </h3>
                            <Link className="blog-two__item-arrow" href="/blog/single"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}