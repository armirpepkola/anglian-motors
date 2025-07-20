import single6 from '@/assets/images/service/single6.jpg';
import VideoPopup from "@/components/modal/VideoPopup";
import Image from "next/image";

export default function PageServicesSection() {
    return (
        <section className="page-service sub-bg pt-130 pb-130">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="page-service__right-item">
                            <div className="section-header mb-5">
                                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">SERVICE
                                    BENEFITS
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Benefit of
                                    Service</h2>
                                <p className="wow fadeInUp " data-wow-duration="1.6s" data-wow-delay=".6s">Praesent eget
                                    mollis nulla, non lacinia urna. Donec sit amet neque auctor, ornare dui rutrum,
                                    condimentum justo. Duis
                                    dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam
                                    eget massa. Sed scelerisque, odio eu
                                    tempor pulvinar, magna tortor finibus lorem, ut mattis tellus.</p>
                            </div>
                            <div className="row g-4">
                                <div className="col-sm-6 wow fadeInLeft" data-wow-duration="1.3s" data-wow-delay=".3s">
                                    <ul>
                                        <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Make strond
                                            your
                                            roof
                                        </li>
                                        <li><i className="fa-solid me-2 primary-color fa-gear"></i> Door and Windows
                                            will
                                            good
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.4s" data-wow-delay=".4s">
                                    <ul>
                                        <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Door and
                                            Windows
                                            will good
                                        </li>
                                        <li><i className="fa-solid me-2 primary-color fa-gear"></i> Make strond your
                                            roof
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".5s">
                                    <ul>
                                        <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> No any leakes
                                            in
                                            roof
                                        </li>
                                        <li><i className="fa-solid me-2 primary-color fa-gear"></i> Maintain your home
                                            structure
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay=".6s">
                                    <ul>
                                        <li><i className="fa-solid mb-4 me-2 primary-color fa-gear"></i> Maintain your
                                            home
                                            structure
                                        </li>
                                        <li><i className="fa-solid me-2 primary-color fa-gear"></i> No any leakes in
                                            roof
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="image position-relative">
                            <Image src={single6} alt="image" className="h-auto"/>
                            <VideoPopup />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}