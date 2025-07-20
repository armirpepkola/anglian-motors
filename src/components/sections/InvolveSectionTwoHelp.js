import helpImage from "@/assets/images/involve/help1.png";
import Image from "next/image";

export default function InvolveSectionTwoHelp() {
    return (
        <section className="involve-two help-area mt-130 mb-130">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="image pe-lg-5 pe-0">
                            <Image src={helpImage} alt="image" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="involve-two__item help-area__item">
                            <div className="section-header mb-4">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> HOW YOU CAN
                                    HELP</h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">how you can
                                    help
                                </h2>
                                <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">Tree planting
                                    is
                                    the act of planting young trees, shrubs, or other woody plants into the ground to
                                    establish new forests
                                    or enhance existing ones. It is a crucial component of environmental conservation
                                    and reforestation efforts aimed.</p>
                            </div>
                            <div className="accordion" id="accordionExample-two">
                                <div className="accordion-item wow fadeInDown" data-wow-duration="1.2s"
                                     data-wow-delay=".2s">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse1" aria-expanded="true"
                                                aria-controls="collapse1">
                                            In which ares do you operate?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show"
                                         aria-labelledby="heading1" data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
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
                                            What is about rental car deals?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse"
                                         aria-labelledby="heading2"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
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
                                            Do you rent to international visitors
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse"
                                         aria-labelledby="heading3"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInDown" data-wow-duration="1.8s"
                                     data-wow-delay=".8s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapse4"
                                                aria-expanded="false"
                                                aria-controls="collapse4">
                                            If i rest a vehicle can i choose the chauffeur?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse"
                                         aria-labelledby="heading4"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p>Tree planting is the act of planting young trees, shrubs, or other woody
                                                plants into the ground to establish new forests
                                                or enhance existing ones. It is a crucial component of environmental</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#0" className="btn-one mt-35"><span>join with us</span> <i
                                className="fa-solid fa-angles-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}