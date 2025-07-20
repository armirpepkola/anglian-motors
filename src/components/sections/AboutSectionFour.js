import aboutInner from "@/assets/images/about/about-two-inner.png";
import aboutInfo1 from "@/assets/images/about/about-info1.png";
import aboutInfo2 from "@/assets/images/about/about-info2.png";
import Link from "next/link";
import Image from "next/image";

export default function AboutSectionFour() {
    return (
        <section className="about-two pt-130 pb-130">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-6">
                        <div className="image">
                            <Image src={aboutInner} alt="image" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right-item">
                            <div className="section-header mb-4">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> protecting
                                    nature</h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Protecting
                                    Nature
                                    By Proper Waste Management!g</h2>
                                <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">Quis ipsum
                                    suspendisse ultrices gravida. Risus commodo viverra. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. It's important to
                                    note that tree planting should be
                                    carried out.</p>
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                                    <div className="d-flex align-items-center">
                                        <Image src={aboutInfo1} alt="image" className="h-auto"/>
                                        <h4 className="ml-20">Recycle Plastic</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                                    <div className="d-flex align-items-center">
                                        <Image src={aboutInfo2} alt="image" className="h-auto"/>
                                        <h4 className="ml-20">Wastage Management</h4>
                                    </div>
                                </div>
                            </div>
                            <ul className="wow mt-4 fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                                <li className="mb-20">
                                    Elit ullamcorper dignissim cras tincidunt lobortis feugiat vibe
                                </li>
                                <li className="mb-20">
                                    Praesent id ligula et nibh bibendum hendrerit vel et mi.
                                </li>
                                <li>
                                    Etiam auctor lacus quis justo porttitor lacinia.
                                </li>
                            </ul>
                            <div className="about_info d-flex align-items-center pt-60 wow fadeInUp"
                                 data-wow-duration="1.9s" data-wow-delay=".9s">
                                <Link href="/about" className="btn-one"><span>More About us</span> <i
                                    className="fa-solid fa-angles-right"></i></Link>
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