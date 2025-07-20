import blogImg04 from "@/assets/images/blog/04.jpg";
import blogImg03 from "@/assets/images/blog/03.jpg";
import blogImg02 from "@/assets/images/blog/02.jpg";
import blogImg01 from "@/assets/images/blog/01.jpg";
import grid1Img from "@/assets/images/blog/blog-grid1.jpg";
import grid2Img from "@/assets/images/blog/blog-grid2.jpg";
import Link from "next/link";
import Image from "next/image";

export default function BlogSectionFour() {
    return (
        <section className="blog pt-130 pb-130">
            <div className="container">
                <div className="row g-4 mb-4 justify-content-center">
                    <div className="col-xl-8 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <div className="blog__item-left">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-5">
                                    <div className="blog__item-left-content">
                                        <span className="blog__tag">Environment</span>
                                        <h3>
                                            <Link href="/blog/single">roup of young volunteers in
                                            park. they are planting</Link>
                                        </h3>
                                        <p>Tree planting is the act of planting young trees, shrubs, or
                                            other woody
                                            plants into the
                                            ground to establish new
                                            forests.</p>
                                        <span className="blog__item-left-content-info">By <strong>Max
                                                Trewhitt</strong> 2
                                            weeks ago</span>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="image">
                                        <Image src={blogImg04} alt="image" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-duration="1.4s" data-wow-delay=".4s">
                        <div className="blog__item-right">
                            <Link href="/blog/single" className="image d-block">
                                <Image src={blogImg02} alt="image" className="h-auto"/>
                            </Link>
                            <h3><Link href="/blog/single">Close up picture of the sapling of the plant is growing</Link>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="blog__tag">Environment</span>
                                <span>2 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4 justify-content-center">
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-duration="1.4s" data-wow-delay=".4s">
                        <div className="blog__item-right">
                            <Link href="/blog/single" className="image d-block">
                                <Image src={grid1Img} alt="image" className="h-auto"/>
                            </Link>
                            <h3>
                                <Link href="/blog/single">Close up picture of the sapling of the plant is growing</Link>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="blog__tag">Environment</span>
                                <span>2 weeks ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <div className="blog__item-left">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-5">
                                    <div className="blog__item-left-content">
                                        <span className="blog__tag">Environment</span>
                                        <h3>
                                            <Link href="/blog/single">roup of young volunteers in
                                            park. they are planting</Link>
                                        </h3>
                                        <p>Tree planting is the act of planting young trees, shrubs, or
                                            other woody
                                            plants into the
                                            ground to establish new
                                            forests.</p>
                                        <span className="blog__item-left-content-info">By <strong>Max
                                                Trewhitt</strong> 2
                                            weeks ago</span>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="image">
                                        <Image src={blogImg01} alt="image" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-xl-8 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <div className="blog__item-left">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-5">
                                    <div className="blog__item-left-content">
                                        <span className="blog__tag">Environment</span>
                                        <h3>
                                            <Link href="/blog/single">roup of young volunteers in
                                            park. they are planting</Link>
                                        </h3>
                                        <p>Tree planting is the act of planting young trees, shrubs, or
                                            other woody
                                            plants into the
                                            ground to establish new
                                            forests.</p>
                                        <span className="blog__item-left-content-info">By <strong>Max
                                                Trewhitt</strong> 2
                                            weeks ago</span>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="image">
                                        <Image src={blogImg03} alt="image" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-duration="1.4s" data-wow-delay=".4s">
                        <div className="blog__item-right">
                            <Link href="/blog/single" className="image d-block">
                                <Image src={grid2Img} alt="image" className="h-auto"/>
                            </Link>
                            <h3><Link href="/blog/single">Close up picture of the sapling of the plant is growing</Link>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="blog__tag">Environment</span>
                                <span>2 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagi-wrp mt-65 justify-content-center wow fadeInDown" data-wow-duration="1.2s"
                     data-wow-delay=".2s">
                    <a href="#0" className="pagi-btn">01</a>
                    <a href="#0" className="pagi-btn active">02</a>
                    <a href="#0" className="pagi-btn ">03</a>
                    <a href="#0" className="fa-solid fa-arrow-right"></a>
                </div>
            </div>
        </section>
    )
}