import howImage1 from "@/assets/images/work/how-image1.png";
import Link from "next/link";
import Image from "next/image";

export default function WorkSectionTwo() {
    return (
        <section className="work work-five pt-130 pb-65">
            <div className="container">
                <div className="pb-65 bor-bottom mb-65">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="section-header m-0">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> WHAT WE
                                    DO</h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">We work
                                    together
                                    for bettering tomorrow</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="work-five__head-image wow fadeInUp float-start float-lg-end"
                                 data-wow-duration="1.6s" data-wow-delay=".6s">
                                <Image src={howImage1} alt="image" className="h-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.2s"
                         data-wow-delay=".2s">
                        <div className="work-five__item">
                            <div className="work__item-icon mb-30">
                                <div className="work-five__icon">
                                    <i className="fa-light fa-lightbulb-on"></i>
                                </div>
                                <span>01</span>
                            </div>
                            <h3><Link href="/services/single">Toyota Land Cruiser</Link></h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services/single"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.4s"
                         data-wow-delay=".4s">
                        <div className="work-five__item">
                            <div className="work__item-icon mb-30">
                                <div className="work-five__icon">
                                    <i className="fa-light fa-seedling"></i>
                                </div>
                                <span>02</span>
                            </div>
                            <h3><Link href="/services/single">Nissan GTR Turbo</Link></h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services/single"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.6s"
                         data-wow-delay=".6s">
                        <div className="work-five__item">
                            <div className="work__item-icon mb-30">
                                <div className="work-five__icon">
                                    <i className="fa-light fa-recycle"></i>
                                </div>
                                <span>03</span>
                            </div>
                            <h3><Link href="/services/single">Mitsubishi Portan</Link></h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services/single"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.8s"
                         data-wow-delay=".8s">
                        <div className="work-five__item">
                            <div className="work__item-icon mb-30">
                                <div className="work-five__icon">
                                    <i className="fa-light fa-raindrops"></i>
                                </div>
                                <span>04</span>
                            </div>
                            <h3><Link href="/services/single">Toyota Land Cruiser</Link></h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services/single"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}