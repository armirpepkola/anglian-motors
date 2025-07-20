import aboutImage from "@/assets/images/about/about-five-image.png";
import involveSmImage from "@/assets/images/involve/involve-sm.jpg";
import Link from "next/link";
import Image from "next/image";

export default function AboutSectionThree() {
    return (
        <section className="involve-two sub-bg pt-130 pb-130">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="involve-two__image">
                            <Image src={aboutImage} alt="image" className="h-auto"/>
                            <div className="image-sm">
                                <Image src={involveSmImage} alt="image" className="h-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="involve-two__item">
                            <div className="section-header mb-4">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">ABOUT Us</h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Trusted Car
                                    Care Solutions.</h2>
                                <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">We want to
                                    live on
                                    a healthy, peaceful planet. A planet where forests flourish, oceans are full of life
                                    and where
                                    once-threatened animals safely roam. Where our quality of life is measured in
                                    relationships, not things we have or own.</p>
                            </div>
                            <div className="accordion" id="accordionExample-two">
                                <div className="accordion-item wow fadeInDown" data-wow-duration="1.2s"
                                     data-wow-delay=".2s">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse1" aria-expanded="true"
                                                aria-controls="collapse1">
                                            E-Waste Recycling
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show"
                                         aria-labelledby="heading1" data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p>Our goal is to ensure the ability of the earth to nurture life in all its
                                                diversity: protect biodiversity in all its
                                                forms, prevent pollution of land, air and water, promote forestation and
                                                protect wildlife.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bor-top wow fadeInDown" data-wow-duration="1.4s"
                                     data-wow-delay=".4s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapse2"
                                                aria-expanded="false"
                                                aria-controls="collapse2">
                                            Water Conservation
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse"
                                         aria-labelledby="heading2"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p>Our goal is to ensure the ability of the earth to nurture life in all its
                                                diversity: protect biodiversity in all its
                                                forms, prevent pollution of land, air and water, promote forestation and
                                                protect wildlife.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInDown" data-wow-duration="1.6s"
                                     data-wow-delay=".6s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapse3"
                                                aria-expanded="false"
                                                aria-controls="collapse3">
                                            Community Charger
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse"
                                         aria-labelledby="heading3"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p>Our goal is to ensure the ability of the earth to nurture life in all its
                                                diversity: protect biodiversity in all its
                                                forms, prevent pollution of land, air and water, promote forestation and
                                                protect wildlife.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="/about" className="btn-one mt-35"><span>More About us</span> <i
                                className="fa-solid fa-angles-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}