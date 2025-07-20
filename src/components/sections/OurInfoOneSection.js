import ourInfo from "@/assets/images/bg/our-info.jpg";
import logoLight from "@/assets/images/logo/logo-light.svg";
import Link from "next/link";
import Image from "next/image";

export default function OurInfoOneSection() {
    return (
        <div className="our-info" style={{ backgroundImage: `url(${ourInfo.src})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                        <Link href="/" className="our-info__logo mb-4 mb-lg-0">
                            <Image src={logoLight} alt="logo" className="h-auto"/>
                        </Link>
                    </div>
                    <div className="col-lg-5 wow fadeInDown" data-wow-duration="1.6s" data-wow-delay=".6s">
                        <div className="our-info__input">
                            <input type="text" placeholder="Your email Address"/>
                            <i className="fa-regular fa-envelope our-info__input-envelope"></i>
                            <i className="fa-solid fa-paper-plane our-info__input-plane"></i>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="our-info__social-icon float-lg-end float-none mt-4 mt-lg-0">
                            <a className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s" href="#0"><i
                                className="fa-brands fa-facebook-f"></i></a>
                            <a className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".3s" href="#0"><i
                                className="fa-brands fa-twitter"></i></a>
                            <a className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s" href="#0"><i
                                className="fa-brands fa-linkedin-in"></i></a>
                            <a className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s" href="#0"><i
                                className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}