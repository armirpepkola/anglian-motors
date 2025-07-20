import leafImg from "@/assets/images/icon/leaf.svg";
import faqImg from "@/assets/images/faq/01.jpg";
import Image from "next/image";

export default function FaqSection() {
    return (
        <>
            <section className="faq-area pt-130 pb-130 sub-bg">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            What is the concept of "The Zen of Trees" all about?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            How do trees represent a source of harmony in nature?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingthree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsethree" aria-expanded="false"
                                                aria-controls="collapsethree">
                                            Why are trees often associated with tranquility and mindfulness?
                                        </button>
                                    </h2>
                                    <div id="collapsethree" className="accordion-collapse collapse"
                                         aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                            How do trees teach us the value of stillness in our lives?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingFour"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false"
                                                aria-controls="collapseFive">
                                            How can spending time with trees be a form of meditation?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="headingFive"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion" id="accordionExample-two">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse2" aria-expanded="false"
                                                aria-controls="collapse2">
                                            What are the different parts of a tree?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse"
                                         aria-labelledby="heading2"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse3" aria-expanded="false"
                                                aria-controls="collapse3">
                                            How do trees benefit the environment?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse"
                                         aria-labelledby="heading3"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse4" aria-expanded="false"
                                                aria-controls="collapse4">
                                            Can you name some of the oldest trees in the world?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse"
                                         aria-labelledby="heading4"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse5" aria-expanded="false"
                                                aria-controls="collapse5">
                                            What is the importance of biodiversity in forests?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse"
                                         aria-labelledby="heading5"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse1" aria-expanded="true"
                                                aria-controls="collapse1">
                                            How do trees influence local weather patterns?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show"
                                         aria-labelledby="heading1"
                                         data-bs-parent="#accordionExample-two">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-area pt-130 pb-130">
                <div className="section-header text-center">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <Image src={leafImg.src} alt="image" className="h-auto"/> FAQ QUESTIONS</h5>
                    <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Questions & Answers</h2>
                    <p className="wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">We have
                        facility to produce advance work various industrial applications <br/> based on
                        specially developed technol-ogy.</p>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="image">
                                <Image src={faqImg.src} alt="image" className="h-auto"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion" id="accordionExample3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading01">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse01" aria-expanded="true"
                                                aria-controls="collapse01">
                                            What role do trees play in providing habitat for wildlife?
                                        </button>
                                    </h2>
                                    <div id="collapse01" className="accordion-collapse collapse show"
                                         aria-labelledby="heading01" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading02">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse02" aria-expanded="false"
                                                aria-controls="collapse02">
                                            What is tree pruning, and when should it be done?
                                        </button>
                                    </h2>
                                    <div id="collapse02" className="accordion-collapse collapse"
                                         aria-labelledby="heading02"
                                         data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading03">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse03" aria-expanded="false"
                                                aria-controls="collapse03">
                                            How do tree planting initiatives contribute to reforestation?
                                        </button>
                                    </h2>
                                    <div id="collapse03" className="accordion-collapse collapse"
                                         aria-labelledby="heading03"
                                         data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading04">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse04" aria-expanded="false"
                                                aria-controls="collapse04">
                                            What is the importance of preserving old-growth forests?
                                        </button>
                                    </h2>
                                    <div id="collapse04" className="accordion-collapse collapse"
                                         aria-labelledby="heading04"
                                         data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading05">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse05" aria-expanded="false"
                                                aria-controls="collapse05">
                                            How do trees contribute to the oxygen cycle on Earth?
                                        </button>
                                    </h2>
                                    <div id="collapse05" className="accordion-collapse collapse"
                                         aria-labelledby="heading05"
                                         data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="text-justify">Trees have been on this planet for hundreds of
                                                millions
                                                of years, long before humans walked the Earth. They have
                                                witnessed the rise and fall of civilizations, the changing of
                                                landscapes,
                                                and the eons of evolution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}