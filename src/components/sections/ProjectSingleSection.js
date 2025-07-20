import projectSingle1 from "@/assets/images/project/project-single1.jpg";
import projectSingle2 from "@/assets/images/project/project-single2.jpg";
import projectSingle3 from "@/assets/images/project/project-single3.jpg";
import projectSingle4 from "@/assets/images/project/project-single4.jpg";
import ps1 from "@/assets/images/icon/ps1.png";
import ps2 from "@/assets/images/icon/ps2.png";
import ps3 from "@/assets/images/icon/ps3.png";
import Image from "next/image";

export default function ProjectSingleSection() {
    return (
        <section className="project-single pt-130 pb-130">
            <div className="container">
                <h3 className="mb-30 text-capitalize">We ensure best service</h3>
                <p>We have facility to produce advance work various industrial applications based on specially developed
                    technol-ogy. We
                    are also ready to developement by according to users changing.
                    Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. </p>
                <p className="mt-30 mb-30">Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor,
                    ornare
                    dui rutrum,
                    condimentum justo. Duis
                    dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed
                    scelerisque, odio eu
                    tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur quis ornare
                    leo. Suspendisse
                    bibendum nibh non turpis vestibulum pellentesque.</p>
                <div className="image">
                    <Image src={projectSingle1} alt="image" className="h-auto"/>
                </div>
                <div className="project-single__items mt-30 pb-65 mb-65 bor-bottom">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="project-single__items-item">
                                <div className="content">
                                    <h4><span></span> Sectors</h4>
                                    <span>Roads & Highway</span>
                                </div>
                                <div className="icon">
                                    <Image src={ps1} alt="icon" className="h-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-single__items-item">
                                <div className="content">
                                    <h4><span></span> Owner</h4>
                                    <span>Roads & Highway</span>
                                </div>
                                <div className="icon">
                                    <Image src={ps2} alt="icon" className="h-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-single__items-item">
                                <div className="content">
                                    <h4><span></span> Project Date</h4>
                                    <span>Started: 2021 - Ending: 2024</span>
                                </div>
                                <div className="icon">
                                    <Image src={ps3} alt="icon" className="h-auto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="mb-30 text-capitalize">The Challenge in Installation</h3>
                <p>We have facility to produce advance work various industrial applications based on specially developed
                    technol-ogy. We
                    are also ready to developement by according to users changing. Cras enim urna, interdum nec
                    porttitor vitae,
                    sollicitudin eu eros.</p>
                <ul className="mt-30">
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                </ul>
                <ul className="mt-30 mb-30">
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                    <li><span></span> Greate Technology</li>
                    <li><span></span> Delivery Ontime</li>
                    <li><span></span> Certified Engineers</li>
                </ul>
                <p>We have facility to produce advance work various industrial applications based on specially developed
                    technol-ogy. We
                    are also ready to developement by according to users changing. Cras enim urna, interdum nec
                    porttitor vitae,
                    sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor,
                    ornare dui rutrum,
                    condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices
                    ante quam eget massa.
                    Sed scelerisque, odio eu tempor pulvinar, magna</p>
                <div className="project-single__testimonial sub-bg mt-40 mb-65">
                    <p>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor,
                        convallis erat sit amet,
                        facilisis velit. Nulla ornare convallis malesuada. Phasellus</p>
                    <i className="fa-solid fa-quote-right"></i>
                </div>
                <h3 className="text-capitalize mb-30">The Final View of Project</h3>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="image">
                            <Image src={projectSingle2} alt="image" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image">
                            <Image src={projectSingle3} alt="image" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image">
                            <Image src={projectSingle4} alt="image" className="h-auto"/>
                        </div>
                    </div>
                </div>
                <p className="mt-3 mb-30">Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor,
                    ornare
                    dui
                    rutrum, condimentum justo. Duis
                    dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed
                    scelerisque, odio eu
                    tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur quis ornare
                    leo. Suspendisse
                    bibendum nibh non turpis vestibulum pellentesque.</p>
                <p>We have facility to produce advance work various industrial applications based on specially developed
                    technol-ogy. We
                    are also ready to developement by according to users changing. Cras enim urna, interdum nec
                    porttitor vitae,
                    sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor,
                    ornare dui rutrum,
                    condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices
                    ante quam eget massa.
                    Sed scelerisque, odio eu tempor pulvinar, magna</p>
            </div>
        </section>
    )
}