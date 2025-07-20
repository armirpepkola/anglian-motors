import hero6 from "@/assets/images/hero/06.jpg";
import heroCircle from "@/assets/images/hero/circle.png";
import hero7 from "@/assets/images/hero/07.jpg";
import shape from "@/assets/images/hero/box-shape-2.png";
import Image from "next/image";

export default function HeroSectionThree() {
    return (
        <section className="hero-section hero-3">
            <div className="container-fluid">
                <div className="row g-4 justify-content-between">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1>
                                Electric is special for pique and pack
                            </h1>
                            <div className="thumb">
                                <Image src={hero6} alt="img" className="h-auto"/>
                                <div className="circle-shape">
                                    <Image src={heroCircle} alt="img" className="h-auto"/>
                                </div>
                            </div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-image">
                            <Image src={hero7} alt="img" className="h-auto"/>
                            <div className="box-shape-2">
                                <Image src={shape} alt="img" className="h-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}