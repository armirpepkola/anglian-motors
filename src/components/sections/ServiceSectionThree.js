import serviceBg from "@/assets/images/bg/service-three-bg.jpg";

import ServiceThreeSlider from "@/components/slider/ServiceThreeSlider";
import Link from "next/link";

export default function ServiceSectionThree() {
    return (
        <section className="service-three pt-130 pb-130 bg-image" style={{ backgroundImage: `url(${serviceBg.src})`}}>
            <div className="container">
                <div className="blog__head-wrp mb-65">
                    <div className="section-header m-0">
                        <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> OUR SERVICE</h5>
                        <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Leading Service for
                            Electric Vehicles
                        </h2>
                    </div>
                    <Link href="/services" className="btn-one mt-4 mt-md-0 wow fadeInUp" data-wow-duration="1.6s"
                       data-wow-delay=".6s"><span>view all
                            news</span> <i className="fa-solid fa-angles-right"></i>
                    </Link>
                </div>
                <ServiceThreeSlider />
            </div>
        </section>
    )
}