import serviceImage from "@/assets/images/service/01.jpg";
import Image from "next/image";

export default function ServiceSectionOne() {
    return (
        <section className="service pb-130">
            <div className="text-center pb-3">
                <h5 className="primary-color wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                    OUR SERVICE
                </h5>
            </div>
            {/*Text slider area start here*/}
            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            our service <span
                            className="stroke-text">what we do</span>
                            our service <span
                            className="stroke-text">what we do</span>
                            our service <span
                            className="stroke-text">what we do</span>
                            our service <span
                            className="stroke-text">what we do</span>
                            our service <span
                            className="stroke-text">what we do</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/*Text slider area end here*/}
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-6">
                        <div className="service__left-item">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item wow fadeInUp" data-wow-duration="1.2s"
                                     data-wow-delay=".2s">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button changeImage"
                                                data-image="assets/images/service/01.jpg" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne">
                                            Carbon Offsetting
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bor-top wow fadeInUp" data-wow-duration="1.4s"
                                     data-wow-delay=".4s">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button changeImage collapsed"
                                                data-image="assets/images/service/02.jpg" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            E-Waste Recycling
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-duration="1.6s"
                                     data-wow-delay=".6s">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button changeImage collapsed"
                                                data-image="assets/images/service/03.jpg" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            Water Conservation
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp" data-wow-duration="1.8s"
                                     data-wow-delay=".8s">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button changeImage collapsed"
                                                data-image="assets/images/service/04.jpg" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            Community Charger
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInDown" data-wow-duration="1.8s" data-wow-delay=".4s">
                        <div className="image">
                            <Image id="myImage" src={serviceImage} alt="image" className="h-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}