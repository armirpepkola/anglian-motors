import hero1Image from "@/assets/images/hero/01.jpg";
import boxShape from "@/assets/images/hero/box-shape.png";
import HeroOneSlider from "@/components/slider/HeroOneSlider";
import buttonImg from "@/assets/images/hero/button.png";
import Link from "next/link";
import Image from "next/image";

export default function HeroSectionOne() {
    return (
        <section className="hero-section hero-1 fix">
            <div className="container-fluid">
                <div className="hero-items">
                    <div className="hero-content">
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24"
                                 fill="none">
                                <path
                                    d="M15.9886 9.27644C15.8924 9.08394 15.6828 8.97443 15.4693 9.00494L9.49419 9.85645L14.967 0.756757C15.0974 0.540253 15.0452 0.260747 14.8457 0.105743C14.6462 -0.04926 14.3615 -0.0322596 14.1826 0.146244L0.147041 14.1465C-0.00584587 14.299 -0.0434408 14.5311 0.0528027 14.7236C0.149046 14.9161 0.358576 15.0256 0.572117 14.9951L6.54723 14.1435L1.07489 23.2432C0.944559 23.4597 0.996691 23.7393 1.1962 23.8943C1.3957 24.0493 1.68042 24.0323 1.85937 23.8538L15.8949 9.85345C16.0473 9.70095 16.0849 9.46894 15.9886 9.27644ZM4.02936 20.2747L7.94978 13.7565C8.04953 13.5915 8.04452 13.3835 7.93775 13.223C7.83048 13.062 7.641 12.977 7.44952 13.0045L1.92053 13.792L12.0131 3.72482L8.09264 10.243C7.99289 10.408 7.99791 10.616 8.10468 10.7765C8.21195 10.9375 8.40143 11.0225 8.59291 10.995L14.1224 10.207L4.02936 20.2747Z"
                                    fill="#41CB5B"/>
                            </svg>
                            Smart EV Charging
                        </h6>
                        <h1>
                            EV chargers for homes and business
                        </h1>
                    </div>
                    <div className="content">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable.
                        </p>
                        <Link href="/about" className="btn-one"><span>Talk to an expert</span> <i
                            className="fa-solid fa-angles-right"></i></Link>
                    </div>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-image">
                            <Image src={hero1Image} alt="img" className="h-auto"/>
                            <div className="box-shape">
                                <Image src={boxShape} alt="img" className="h-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-slider-items">
                            <div className="sub-content">
                                <div className="cont">
                                    <h4>Browse Chargers</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,</p>
                                </div>
                                <Link href="/services/single">
                                    <Image src={buttonImg} alt="img" className="h-auto"/>
                                </Link>
                            </div>
                            <HeroOneSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}