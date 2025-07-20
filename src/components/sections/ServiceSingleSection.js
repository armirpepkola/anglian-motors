import single1 from"@/assets/images/service/single1.jpg";
import single2 from"@/assets/images/service/single2.jpg";
import single3 from"@/assets/images/service/single3.jpg";
import single4 from"@/assets/images/service/single4.png";
import single5 from"@/assets/images/service/single5.jpg";
import Link from "next/link";
import Image from "next/image";

export default function ServiceSingleSection() {
    return (
        <section className="service-single pt-130 pb-130">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="service-single__left-item">
                            <div className="image">
                                <Image src={single1} alt="image" className="h-auto"/>
                            </div>
                            <h3 className="text-capitalize mt-40 mb-30">Feed & Care For Shelter Animals Every Day!</h3>
                            <p>We have facility to produce advance work various industrial applications based on
                                specially developed technol-ogy. We
                                are also ready to developement by according to users changing.
                                Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros.</p>
                            <p className="mt-30 mb-40">Praesent eget mollis nulla, non lacinia urna. Donec sit amet
                                neque
                                auctor, ornare dui
                                rutrum, condimentum justo. Duis
                                dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget
                                massa. Sed scelerisque, odio eu
                                tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur
                                quis ornare leo. Suspendisse
                                bibendum nibh non turpis vestibulum pellentesque.</p>
                            <ul>
                                <li><span></span> Greate Technology</li>
                                <li><span></span> Delivery Ontime</li>
                                <li><span></span> Certified Engineers</li>
                            </ul>
                            <ul className="mt-30 mb-40">
                                <li><span></span> Greate Technology</li>
                                <li><span></span> Delivery Ontime</li>
                                <li><span></span> Certified Engineers</li>
                            </ul>
                            <h3 className="text-capitalize mb-30">Modern Service Standard</h3>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="image">
                                        <Image src={single2} alt="image" className="h-auto"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image">
                                        <Image src={single3} alt="image" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3">Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque
                                auctor,
                                ornare dui
                                rutrum, condimentum justo. Duis
                                dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget
                                massa. Sed scelerisque, odio eu
                                tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur
                                quis ornare leo. Suspendisse
                                bibendum nibh non turpis vestibulum pellentesque.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-single__right-item">
                            <div className="item-one mb-30 pb-30">
                                <div className="image">
                                    <Image src={single4} alt="image" className="h-auto"/>
                                </div>
                                <h3>Available</h3>
                                <h3 className="text-capitalize mt-2 mb-30">for any type of Service</h3>
                                <Link href="/contact">Contact Us <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            <div className="item-two bg-image mb-30"
                                 style={{ backgroundImage: `url(${single5.src})`}}>
                                <div className="wrp">
                                    <i className="fa-solid fa-phone-volume ring-animation"></i>
                                    <h3 className="text-capitalize">Have any questions?</h3>
                                    <h3 className="text-capitalize mt-2 mb-30">
                                        call us today!</h3>
                                    <div className="line"><span className="sm_line"></span> <span
                                        className="big_line"></span></div>
                                    <a href="tel:+910261259870">+91 026 125 9870</a>
                                </div>
                            </div>
                            <div className="item-three sub-bg">
                                <div className="content">
                                    <h3>Download Brochures</h3>
                                    <p>We have facility to produce advance work various industrial applications based on
                                    </p>
                                </div>
                                <a href="#0"><i className="fa-solid fa-arrow-down"></i> Download Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}