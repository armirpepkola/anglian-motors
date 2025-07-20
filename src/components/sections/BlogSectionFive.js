import {blogTwoPosts} from "@/data/slider";
import Link from "next/link";
import Image from "next/image";

export default function BlogSectionFive() {
    return (
        <section className="blog-two pt-130 pb-130">
            <div className="container">
                <div className="row g-4">
                    {blogTwoPosts.map((post) => (
                        <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
                            <div className="donation__item blog-two__item bor">
                                <div className="blog-two__image mb-85">
                                    <div className="image">
                                        <Image src={post.thumbnail} alt="image" className="h-auto"/>
                                        <div className="blog-two__info">
                                            <h4 dangerouslySetInnerHTML={{__html: post.date}}></h4>
                                            <span>{post.year}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3><Link href="/blog/single">{post.title}</Link></h3>
                                <Link className="blog-two__item-arrow" href="/blog/single">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
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