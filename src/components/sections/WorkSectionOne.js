import Link from "next/link";

export default function WorkSectionOne({ customClass}) {
    return (
        <section className={`work pt-130 pb-130 ${customClass}`}>
            <div className="container">
                <div className="mb-65">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="section-header m-0">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> HOW WE
                                    WORK</h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Premier
                                    Service Providers for Electric Vehicles</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">we are an
                                organization
                                engaged in "Tree Planting" activities, therefore you can "Donate
                                Trees. We also join in
                                "Community Forestry | Reforestation" to keep the earth together so that it remains
                                sustainable.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.2s"
                         data-wow-delay=".2s">
                        <div className="work__item">
                            <div className="work__item-icon">
                                <i className="flaticon-electric-station"></i>
                                <span>01</span>
                            </div>
                            <h3><Link href="/services">Comprehensive Charging Solutions</Link></h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services">
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.4s"
                         data-wow-delay=".4s">
                        <div className="work__item">
                            <div className="work__item-icon">
                                <i className="flaticon-electric-car"></i>
                                <span>02</span>
                            </div>
                            <h3>
                                <Link href="/services">image
                                Home Charging Installations</Link>
                            </h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services">
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.6s"
                         data-wow-delay=".6s">
                        <div className="work__item">
                            <div className="work__item-icon">
                                <i className="flaticon-electric-car-1"></i>
                                <span>03</span>
                            </div>
                            <h3>
                                <Link href="/services">Public Charging Infrastructure</Link>
                            </h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.8s"
                         data-wow-delay=".8s">
                        <div className="work__item">
                            <div className="work__item-icon">
                                <i className="flaticon-charging-station-1"></i>
                                <span>04</span>
                            </div>
                            <h3><Link href="/services">Fast and Efficient Charging</Link></h3>
                            <p>We maintain a busy network of forestry and social development staff along with local
                                facilitators in the areas we work.</p>
                            <Link className="work__item-arrow" href="/services"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}