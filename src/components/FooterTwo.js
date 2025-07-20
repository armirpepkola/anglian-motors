import footerBg from "@/assets/images/hero/footer-bg.jpg";
import logoLight from "@/assets/images/logo/logo-light.svg";
import Link from "next/link";
import Image from "next/image";

export default function FooterTwo() {
    return (
        <footer className="footer footer-5 footer-two pt-130"
                style={{ backgroundImage: `url('${footerBg.src}')`}}>
            <div className="container">
                <div className="footer-two__wrp">
                    <div className="row g-4">
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                            <div className="footer__item px-4 footer-two__item">
                                <Link href="/" className="logo mb-30">
                                    <Image src={logoLight} alt="logo" className="h-auto"/>
                                </Link>
                                <p className="mb-20 pb-20 bor-bottom">Tree planting is the act of planting young trees,
                                    shrubs,
                                    or
                                    other woody plants into the
                                    ground to establish new</p>
                                <div className="social-icon">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".6s">
                            <div className="footer__item footer-two__item">
                                <div className="footer__item-title">
                                    <h4>Quick Link</h4>
                                    <span className="footer__item-title-line"></span><span
                                    className="footer__item-title-line2"></span>
                                </div>
                                <ul>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                                            Water Conservation
                                        </Link>
                                    </li>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                                            Eco System
                                        </Link>
                                    </li>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                                            Plastic Recycling
                                        </Link>
                                    </li>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i>
                                            Urban planning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i> Save Green
                                            House
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".4s">
                            <div className="footer__item footer-two__item">
                                <div className="footer__item-title">
                                    <h4>Get in touch!</h4>
                                    <span className="footer__item-title-line"></span><span
                                    className="footer__item-title-line2"></span>
                                </div>
                                <ul>
                                    <li className="pb-3"><a href="#0"><i
                                        className="fa-solid fa-location-dot pe-1 primary-color"></i>
                                        901 N Pitt Str., Suite 170 <br/>
                                        Alexandria, USA
                                    </a>
                                    </li>
                                    <li className="pb-3"><a href="tel:+4065550120"><i
                                        className="fa-solid fa-phone-volume pe-1 primary-color"></i>
                                        (406) 555-0120
                                    </a></li>
                                    <li><a href="#0"><i className="fa-solid fa-envelope pe-1 primary-color"></i>
                                        info@extrem.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                            <div className="footer__item footer-two__item pe-4">
                                <div className="footer__item-title">
                                    <h4>Subscribe Newsletter</h4>
                                    <span className="footer__item-title-line"></span><span
                                    className="footer__item-title-line2"></span>
                                </div>
                                <p className="text-white">Subscribe to our newsletter for discounts and suffer in some
                                    form
                                </p>
                                <div className="input-area mt-30">
                                    <input type="text" placeholder="Your Email"/>
                                    <button>
                                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright footer-two__copyright">
                <p>&copy; Copyright 2025 <a href="#0">Charger</a> All Rights Reserved</p>
            </div>
        </footer>
    )
}