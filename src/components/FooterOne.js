import footerBg from "@/assets/images/bg/footer-bg.jpg";
import footer1 from "@/assets/images/footer/01.png";
import footer2 from "@/assets/images/footer/02.png";
import Link from "next/link";
import Image from "next/image";

export default function FooterOne() {
    return (
        <footer className="footer bg-image" style={{ backgroundImage: `url(${footerBg.src})` }}>
            <div className="container">
                <div className="pt-65 pb-65">
                    <div className="row g-4">
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                            <div className="footer__item">
                                <div className="footer__item-title">
                                    <h4>about Charger</h4>
                                    <span className="footer__item-title-line"></span><span
                                    className="footer__item-title-line2"></span>
                                </div>
                                <p>Tree planting is the act of planting young trees, shrubs, or other woody plants into
                                    the
                                    ground to establish new</p>
                                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29581.552527417!2d-77.04440883230183!3d38.80089850193032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0f02c6539a9%3A0xacc6091466dd9068!2s901%20N%20Pitt%20St%20Suite%20170%2C%20Alexandria%2C%20VA%2022314%2C%20USA!5e0!3m2!1sen!2sbd!4v1694324425557!5m2!1sen!2sbd"
                                   className="footer__item-map-popup map-popup">View Map <i
                                    className="fa-solid fa-location-arrow"></i></a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                            <div className="footer__item">
                                <div className="footer__item-title">
                                    <h4>Get in touch!</h4>
                                    <span className="footer__item-title-line"></span><span
                                    className="footer__item-title-line2"></span>
                                </div>
                                <ul>
                                    <li className="pb-3"><a href="#0"><i
                                        className="fa-solid fa-location-dot pe-1 primary-color"></i>
                                        901 N Pitt Str., Suite 170
                                        Alexandria, <br/> USA
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
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                            <div className="footer__item">
                                <div className="footer__item-title">
                                    <h4>Quick Link</h4>
                                    <span className="footer__item-title-line"></span><span
                                    className="footer__item-title-line2"></span>
                                </div>
                                <ul>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i> Water Conservation
                                        </Link>
                                    </li>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i> Eco System
                                        </Link>
                                    </li>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i> Plastic Recycleing
                                        </Link>
                                    </li>
                                    <li className="pb-1">
                                        <Link href="/services/single">
                                            <i className="fa-solid fa-chevron-right pe-1 primary-color"></i> Urban planning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/single"><i
                                        className="fa-solid fa-chevron-right pe-1 primary-color"></i> Save Green
                                            House
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                            <div className="footer__item">
                                <div className="footer__item-title">
                                    <h4>recent news</h4>
                                    <span className="footer__item-title-line"></span><span
                                    className="footer__item-title-line2"></span>
                                </div>
                                <ul className="footer__item-blog">
                                    <li className="pb-3">
                                        <Image src={footer1} alt="image" className="h-auto"/>
                                        <div className="ms-3">
                                            <h4>
                                                <Link href="/blog/single">Close up picture of the sapling</Link>
                                            </h4>
                                            <span>2 weeks ago</span>
                                        </div>
                                    </li>
                                    <li>
                                        <Image src={footer2} alt="image" className="h-auto"/>
                                        <div className="ms-3">
                                            <h4>
                                                <Link href="/blog/single">Close up picture of the sapling</Link>
                                            </h4>
                                            <span>2 weeks ago</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; Copyright 2025 <a href="#0">Charger</a> All Rights Reserved</p>
            </div>
        </footer>
    )
}