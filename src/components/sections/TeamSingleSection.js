import memberImage from "@/assets/images/team/02.jpg";
import Image from "next/image";

export default function TeamSingleSection() {
    return (
        <section className="team-single pt-130">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="team-single__image">
                            <Image src={memberImage} alt="image" className="h-auto"/>
                            <div className="team-info">
                                <a className="d-block" href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                <a className="d-block" href="#0"><i className="fa-brands fa-twitter"></i></a>
                                <a className="d-block" href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="team-single__content">
                            <div className="title pb-30 mb-30 bor-bottom">
                                <h3>Mark R. Stuckey</h3>
                                <span className="primary-color mt-1">Senior Engineer</span>
                            </div>
                            <div className="team-single__info">
                                <h4 className="pb-3">About Me</h4>
                                <p className="mb-30">This good man possesses qualities that inspire us all. He is
                                    selfless,
                                    always putting
                                    the needs of others before his
                                    own. Whether it's helping a neighbor in distress, volunteering at local charities,
                                    or simply lending a listening ear to
                                    those who need it, he consistently demonstrates the true meaning of altruism.
                                </p>
                                <p>This good man is a source of unwavering support and
                                    encouragement to those around
                                    him. He is a pillar of strength in
                                    times of adversity and a wellspring of joy in times of celebration.
                                </p>
                                <div className="skills mt-65">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="experience-progress-wrapper">
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex align-items-center justify-content-between">
                                                        <h5 className="experience-title pb-2">Interior Design</h5>
                                                        <span className="exp" style="left:90%">90%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                             data-wow-duration=".8s" role="progressbar"
                                                             style="width: 90%;" aria-valuenow="90" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex justify-content-between align-items-center">
                                                        <h5 className="experience-title pb-2">Maching Learning</h5>
                                                        <span style="left:98%">98%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                             data-wow-duration=".9s" role="progressbar"
                                                             style="width: 98%;" aria-valuenow="98" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="experience-progress-wrapper">
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex align-items-center justify-content-between">
                                                        <h5 className="experience-title pb-2">Consultant</h5>
                                                        <span className="exp" style="left:90%">90%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                             data-wow-duration=".8s" role="progressbar"
                                                             style="width: 90%;" aria-valuenow="90" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="experience-progress pb-4">
                                                    <div
                                                        className="experience-title-wrapper d-flex justify-content-between align-items-center">
                                                        <h5 className="experience-title pb-2">Visual Concept</h5>
                                                        <span style="left:98%">98%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow slideInLeft"
                                                             data-wow-duration=".9s" role="progressbar"
                                                             style="width: 98%;" aria-valuenow="98" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-single-history sub-bg pt-65 pb-65 mt-65">
                <div className="container">
                    <div className="title pb-30 mb-30 bor-bottom">
                        <h3>Education Background</h3>
                    </div>
                    <h4><span className="primary-color text-capitalize mb-3">Bachelor's degree</span>, 2010</h4>
                    <p>Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat,
                        ornare
                        eget tristique
                        vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus
                        sem
                        id massa semper
                        ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet,
                        leo
                        auctor volutpat
                        ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                    <h4><span className="primary-color text-capitalize mb-3 mt-5">Master's degree in design</span>, 2015
                    </h4>
                    <p>Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat,
                        ornare
                        eget tristique
                        vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus
                        sem
                        id massa semper
                        ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet,
                        leo
                        auctor volutpat
                        ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                </div>
            </div>
        </section>
    )
}