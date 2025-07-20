import {Swiper, SwiperSlide} from "swiper/react";
import {teamsThreeData} from "@/data/team";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function TeamSectionThree() {
    return (
        <section className="team pt-130 pb-130">
            <div className="container">
                <div className="blog__head-wrp mb-65">
                    <div className="section-header m-0">
                        <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">OUR TEAM MEMBERS</h5>
                        <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">The amazing team
                            behind <br/>
                            our company</h2>
                    </div>
                    <div className="arry-btn mt-4 mt-lg-0">
                        <button className="arry-prev team__arry-prev wow fadeInUp" data-wow-duration="1.6s"
                                data-wow-delay=".6s"><i className="fa-light fa-chevron-left"></i></button>
                        <button className="ms-3 active arry-next team__arry-next wow fadeInUp" data-wow-duration="1.8s"
                                data-wow-delay=".8s"><i className="fa-light fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className="swiper team__slider">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        spaceBetween={30}
                        speed={500}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1200: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        navigation={{
                            nextEl: ".team__arry-next",
                            prevEl: ".team__arry-prev",
                        }}
                        className="swiper-wrapper"
                    >
                        {teamsThreeData.map((team) => (
                            <SwiperSlide className="swiper-slide">
                                <div className="team__item">
                                    <div className="team__item-image">
                                        <Image src={team.image} alt="image" className="h-auto"/>
                                        <div className="team__item-image-icon social-icon">
                                            <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <h3><Link href="/team/single">{team.name}</Link></h3>
                                    <span>{team.role}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}