import viewImage1 from "@/assets/images/view/view-image1.jpg";
import viewImage2 from "@/assets/images/view/view-image2.jpg";
import viewImage3 from "@/assets/images/view/view-image3.jpg";
import Link from "next/link";
import Image from "next/image";

export default function ViewSectionOne() {
    return (
        <section className="blog-two  pb-130 pt-65">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <div className="donation__item blog-two__item bor view__item">
                            <div className="blog-two__image mb-30">
                                <div className="image">
                                    <Image src={viewImage1} alt="image" className="h-auto"/>
                                </div>
                            </div>
                            <h3>
                                <Link href="/project/single">Repairs</Link>
                            </h3>
                            <Link className="blog-two__item-arrow" href="/project/single">
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1.4s" data-wow-delay=".4s">
                        <div className="donation__item blog-two__item bor view__item">
                            <div className="blog-two__image mb-30">
                                <div className="image">
                                    <Image src={viewImage2} alt="image" className="h-auto"/>
                                </div>
                            </div>
                            <h3><Link href="/project/single">Detailing</Link></h3>
                            <Link className="blog-two__item-arrow" href="/project/single"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1.6s" data-wow-delay=".6s">
                        <div className="donation__item blog-two__item bor view__item">
                            <div className="blog-two__image mb-30">
                                <div className="image">
                                    <Image src={viewImage3} alt="image" className="h-auto"/>
                                </div>
                            </div>
                            <h3><Link href="/project/single">Polishing</Link></h3>
                            <Link className="blog-two__item-arrow" href="/project/single"><i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}