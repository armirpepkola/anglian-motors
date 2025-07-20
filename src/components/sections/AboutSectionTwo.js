import about1 from '@/assets/images/about/01.jpg';
import about2 from '@/assets/images/about/02.png';
import aboutBg from '@/assets/images/about/about-ex-bg.png';
import Image from "next/image";

export default function AboutSectionTwo({ customClass = '' }) {
    return (
        <section className={ `about-two pb-130 ${customClass}`}>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="about-two__image">
                            <Image src={about1} alt="image" className="h-auto"/>
                            <div className="sm-image d-none d-sm-block">
                                <Image src={about2} alt="image" className="h-auto"/>
                            </div>
                            <div className="info d-none d-sm-block bg-image"
                                 style={{ backgroundImage: `url(${aboutBg.src})`}}>
                                <h2><span className="count">25</span>+</h2>
                                <span className="year">Years Experience</span>
                            </div>
                            <div className="stroke-text d-none d-sm-block">
                                <h2>since 1980</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right-item">
                            <div className="section-header mb-4">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> ABOUT
                                    US</h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Trusted Car
                                    Care Solutions.</h2>
                                <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">Tree planting
                                    is
                                    the act of planting young trees, shrubs, or other woody plants into the ground to
                                    establish new forests
                                    or enhance existing ones. It is a crucial component of environmental conservation
                                    and reforestation efforts aimed at
                                    combating deforestation, mitigating climate change, improving biodiversity.</p>
                            </div>
                            <h3 className="pb-30 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">Here are
                                some
                                key aspects of
                                tree planting</h3>
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-10">
                                <ul className="wow fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                                    <li className="mb-30">
                                        Public Chargers
                                    </li>
                                    <li className="mb-30">
                                        Soil Conservation
                                    </li>
                                </ul>
                                <ul className="wow fadeInDown" data-wow-duration="1.4s" data-wow-delay=".4s">
                                    <li className="mb-30">
                                        Climate Change Mitigation
                                    </li>
                                    <li className="mb-30">
                                        Biodiversity Conservation
                                    </li>
                                </ul>
                                <ul className="wow fadeInDown" data-wow-duration="1.6s" data-wow-delay=".6s">
                                    <li className="mb-30">
                                        Air Quality Improvement
                                    </li>
                                    <li className="mb-30">
                                        Economic Benefits
                                    </li>
                                </ul>
                            </div>
                            <p className="wow fadeInDown" data-wow-duration="1.8s" data-wow-delay=".8s">It's important
                                to
                                note
                                that tree planting should be carried out thoughtfully, considering
                                factors such as the
                                suitability of tree species to the local ecosystem</p>
                            <div className="about_info d-flex align-items-center pt-65 wow fadeInUp"
                                 data-wow-duration="1.9s" data-wow-delay=".9s">
                                <a href="/about" className="btn-one"><span>More About us</span> <i
                                    className="fa-solid fa-angles-right"></i></a>
                                <span className="bor-left d-none d-sm-block mx-4"></span>
                                <div className="info d-flex flex-wrap align-items-center">
                                    <i className="fa-solid fa-phone-volume ring-animation"></i>
                                    <div className="about_info_con">
                                        <span className="d-block text-capitalize">call any time</span>
                                        <a href="tel:+912659302003">+91 2659 302 003</a>
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