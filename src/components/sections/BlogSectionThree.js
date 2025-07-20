import blog3Image1 from "@/assets/images/blog/blog-three-image1.jpg";
import blog3Image2 from "@/assets/images/blog/blog-three-image2.jpg";
import blog3Image3 from "@/assets/images/blog/blog-three-image3.jpg";
import Link from "next/link";
import Image from "next/image";

export default function BlogSectionThree() {
    return (
        <section className="blog-two blog-three pt-130 pb-130">
            <div className="container">
                <div className="blog__head-wrp mb-65">
                    <div className="section-header m-0">
                        <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> LATEST NEWS</h5>
                        <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Recent articles and
                            news
                        </h2>
                    </div>
                    <Link href="/blog-3" className="btn-one mt-4 mt-md-0 wow fadeInUp" data-wow-duration="1.6s"
                       data-wow-delay=".6s"><span>view all news</span> <i className="fa-solid fa-angles-right"></i></Link>
                </div>
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.2s"
                         data-wow-delay=".2s">
                        <div className="donation__item blog-two__item blog-three__item bor">
                            <div className="blog-two__image blog-three__image">
                                <div className="image">
                                    <Image src={blog3Image1} alt="image" className="h-auto"/>
                                    <div className="blog-two__info">
                                        <h4>15 <br/> JUNE</h4>
                                        <span>2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <h3>
                                    <Link href="/blog/single">
                                        10 European ski destinations you should visit this winter
                                    </Link>
                                </h3>
                                <Link className="blog-two__item-arrow" href="/blog/single">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.4s"
                         data-wow-delay=".4s">
                        <div className="donation__item blog-two__item blog-three__item bor">
                            <div className="blog-two__image blog-three__image">
                                <div className="image">
                                    <Image src={blog3Image2} alt="image" className="h-auto"/>
                                    <div className="blog-two__info">
                                        <h4>15 <br/> JUNE</h4>
                                        <span>2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <h3>
                                    <Link href="/blog/single">Booking travel during Corona: Find who are giving
                                    services</Link>
                                </h3>
                                <Link className="blog-two__item-arrow" href="/blog/single">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1.6s"
                         data-wow-delay=".6s">
                        <div className="donation__item blog-two__item blog-three__item bor">
                            <div className="blog-two__image blog-three__image">
                                <div className="image">
                                    <Image src={blog3Image3} alt="image" className="h-auto"/>
                                    <div className="blog-two__info">
                                        <h4>15 <br/> JUNE</h4>
                                        <span>2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <h3>
                                    <Link href="/blog/single">Top Luxury Cars of 2024 Style, Comfort, and
                                    Performance</Link>
                                </h3>
                                <Link className="blog-two__item-arrow" href="/blog/single">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}