import blog2Img from "@/assets/images/blog/02.jpg";
import BlogOneSlider from "@/components/slider/BlogOneSlider";
import Link from "next/link";
import Image from "next/image";

export default function BlogSectionOne() {
    return (
        <section className="blog pt-130 pb-130">
            <div className="container">
                <div className="blog__head-wrp mb-65">
                    <div className="section-header m-0">
                        <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                            LATEST NEWS</h5>
                        <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Recent articles and
                            news

                        </h2>
                    </div>
                    <Link href="/blog-3" className="btn-one mt-4 mt-md-0 wow fadeInUp" data-wow-duration="1.6s"
                       data-wow-delay=".6s"><span>view all news</span> <i className="fa-solid fa-angles-right"></i></Link>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-xl-8 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <BlogOneSlider />
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-duration="1.4s" data-wow-delay=".4s">
                        <div className="blog__item-right">
                            <Link href="/blog/single" className="image d-block">
                                <Image src={blog2Img} alt="image" className="h-auto"/>
                            </Link>
                            <h3><Link href="/blog/single">This year more than $5 billion was saved on fuel</Link>
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="blog__tag">ENGINE</span>
                                <span>2 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}