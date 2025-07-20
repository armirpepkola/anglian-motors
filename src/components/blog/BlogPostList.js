import {blogPosts} from "@/data/blog";
import Link from "next/link";
import VideoPopup from "@/components/modal/VideoPopup";
import Image from "next/image";

export default function BlogPostList() {
    return (
        <div className="col-lg-8">
            {blogPosts.map((post) => (
                <>
                    <div className="item bor">
                        {post.type === 'text' ? (
                            <Link href="/blog/single" className="image d-block mb-30">
                                <Image src={post.image} alt="image" className="h-auto"/>
                            </Link>
                        ) : (
                            <div className="image video_item d-block mb-30">
                                <Image src={post.image} alt="image" className="h-auto"/>
                                <VideoPopup />
                            </div>
                        )}

                        <div className="d-flex align-items-center justify-content-between">
                            <div className="info">
                                <span>Written By: <a href="#0">{post.author}</a></span>
                                <span className="info_dot"></span>
                                <span>{post.date}</span>
                            </div>
                            <div className="image-tag">
                                {post.categories.map((category) => (
                                    <a href="#0">{category}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="item mb-65 py-0">
                        <h3 className="text-capitalize mt-30 mb-3">
                            <Link href="/blog/single">{post.title}</Link>
                        </h3>
                        <p>{post.description}</p>
                        <Link className="go_blog mt-30" href="/blog/single">
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </>
            ))}


            <div className="pt-4 bor-top mt-65">
                <a className="blog-pegi" href="#0">01</a>
                <a className="blog-pegi active" href="#0">02</a>
                <a className="blog-pegi" href="#0">03</a>
                <a href="#0"><i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
    )
}