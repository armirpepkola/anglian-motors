import infoImage from "@/assets/images/about/info.png";
import signatureImage from "@/assets/images/about/signature.png";
import Image from "next/image";

export default function AboutSectionOne() {
    return (
        <section className="about pt-130 pb-65">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6">
                        <div className="section-header mb-5">
                            <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">ABOUT US</h5>
                            <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">We Provide Best
                                Car Charging Experiences.</h2>
                            <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">Tree planting is
                                the
                                act of planting young trees, shrubs, or other woody plants into the
                                ground to establish new forests
                                or enhance existing ones. It is a crucial component of environmental conservation and
                                reforestation efforts aimed</p>
                        </div>
                        <div className="about__info wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                            <div className="about__info-info-con">
                                <ul>
                                    <li>
                                        <Image src={infoImage} alt="image" className="h-auto"/>
                                    </li>
                                    <li>
                                        <h4><a href="#0">Robert Joe Kerry</a></h4>
                                        <span>Founder</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="about__info-signature">
                                <Image src={signatureImage} alt="icon" className="h-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="experience-progress-wrapper">
                            <div className="experience-progress pb-4">
                                <div
                                    className="experience-title-wrapper d-flex align-items-center justify-content-between">
                                    <h5 className="experience-title pb-2">Carbon Offsetting</h5>
                                    <span className="exp" style={{ left: "80%"}}>80%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration=".8s"
                                         role="progressbar"
                                         style={{ width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="experience-progress pb-4">
                                <div
                                    className="experience-title-wrapper d-flex justify-content-between align-items-center">
                                    <h5 className="experience-title pb-2">Water Conservation</h5>
                                    <span style={{ left: "90%"}}>90%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration=".9s"
                                         role="progressbar"
                                         style={{ width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div className="experience-progress">
                                <div
                                    className="experience-title-wrapper d-flex justify-content-between align-items-center">
                                    <h5 className="experience-title pb-2">E-Waste Recycling</h5>
                                    <span style={{ left: "70%"}}>70%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration=".7s"
                                         role="progressbar"
                                         style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
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