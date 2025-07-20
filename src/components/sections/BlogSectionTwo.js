import BlogTwoSlider from "@/components/slider/BlogTwoSlider";
import Link from "next/link";

export default function BlogSectionTwo() {
    return (
        <section className="blog-two pt-130 pb-130">
            <div className="container">
                <div className="blog__head-wrp mb-65">
                    <div className="section-header m-0">
                        <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> LATEST NEWS</h5>
                        <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">Latest Press Update
                        </h2>
                    </div>
                    <Link href="/blog-2" className="btn-one mt-4 mt-md-0 wow fadeInUp" data-wow-duration="1.6s"
                       data-wow-delay=".6s"><span>view all news</span> <i className="fa-solid fa-angles-right"></i></Link>
                </div>
            </div>
            <BlogTwoSlider />
        </section>
    )
}