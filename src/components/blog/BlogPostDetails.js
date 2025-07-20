import singleImg1 from "@/assets/images/blog/single1.jpg";
import singleImg2 from "@/assets/images/blog/single2.jpg";
import singleImg3 from "@/assets/images/blog/single3.jpg";
import sm3Img from "@/assets/images/blog/sm3.png";
import sm4Img from "@/assets/images/blog/sm4.png";
import Image from "next/image";

export default function BlogPostDetails() {
    return (
        <div className="col-lg-8">
            <div className="image mb-30">
                <Image src={singleImg1} alt="image" className="h-auto"/>
            </div>
            <div className="item">
                <div className="info">
                    <span>Written By: <a href="#0">Marry Biden</a></span>
                    <span className="info_dot"></span>
                    <span>10/01/2024</span>
                </div>
                <h3 className="text-capitalize mt-30 mb-3">Guide dog shortage: The blind people who train their
                </h3>
                <p className="mt-3 mb-3">Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit
                    tortor. Maecenas dui
                    erat, ornare eget tristique
                    vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent
                    faucibus sem id massa semper
                    ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus
                    aliquet, leo auctor volutpat
                    ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                <p>consectetur adipiscing elit. Etiam at mauris accumsan mi pulvinar lacinia a in justo. Ut
                    tempor et libero quis
                    dignissim. Nulla at convallis libero, vitae aliquam leo. Etiam ut augue nibh. In laoreet
                    neque quis ex ornare, quis
                    auctor elit facilisis. Mauris dapibus massa rhoncus ligula luctus vulputate. Fusce
                    condimentum placerat vulputate.
                    Praesent ullamcorper dui in dui sagittis commodo.</p>
                <h3 className="mb-40 mt-5">Where can I get some?</h3>
            </div>
            <div className="row g-3">
                <div className="col-lg-6">
                    <div className="image">
                        <Image src={singleImg2} alt="image" className="h-auto"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="image">
                        <Image src={singleImg3} alt="image" className="h-auto"/>
                    </div>
                </div>
            </div>
            <div className="item">
                <p className="mt-40">Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor.
                    Maecenas dui erat, ornare eget tristique
                    vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent
                    faucibus sem id massa semper
                    ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus
                    aliquet, leo auctor volutpat
                    ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                <ul className="mt-30 list_here mb-30">
                    <li>Mauris maximus diam ac imperdiet dictum.</li>
                    <li>Maecenas eget ipsum dapibus, rutrum mi non, ultricies massa..</li>
                    <li>Nam non purus porta risus tincidunt cursus.</li>
                    <li>Quisque blandit lacus vel urna pellentesque mattis.</li>
                    <li>Maecenas vehicula tortor et consectetur faucibus.</li>
                </ul>
                <div className="blog_testimonial mb-30 sub-bg">
                    <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci
                        velit..."</p>
                </div>
                <p className="mb-30">Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor.
                    Maecenas dui
                    erat, ornare eget tristique
                    vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent
                    faucibus sem id massa semper
                    ornare. Nam eu magna at mi pellentesque mattis.</p>
            </div>
            <div className="tag-share py-4 bor-top bor-bottom">
                <div className="tag">
                    <strong className="me-2">Tags:</strong>
                    <a href="#0">Creative</a>
                    <a href="#0">Agency</a>
                    <a href="#0">Business</a>
                </div>
                <div className="share">
                    <strong className="me-2">Share:</strong>
                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div className="arry pt-30 pb-30 d-flex align-items-center justify-content-between">
                <a href="#0"><i className="fa-solid fa-arrow-left-long pe-1"></i> Previous Blog</a>
                <a href="#0">Next Blog <i className="fa-solid fa-arrow-right-long ps-1"></i></a>
            </div>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="recent-post sub-bg">
                        <div className="img"><Image src={sm3Img} alt="image" className="h-auto"/></div>
                        <div className="con">
                            <span>10/01/2024</span>
                            <h5><a href="#0">The blind peo
                                ple who train their own guide and go now</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="recent-post sub-bg">
                        <div className="img"><Image src={sm4Img} alt="image" className="h-auto"/></div>
                        <div className="con">
                            <span>10/01/2024</span>
                            <h5><a href="#0">The blind peo
                                ple who train their own guide and go now</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-area pt-65">
                <div className="container">
                    <h2 className="text-capitalize mb-65">Leave a comment</h2>
                    <form action="#0">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className="col-lg-6">
                                <input type="email" placeholder="Email"/>
                            </div>
                        </div>
                        <textarea name="textarea" id="comment" placeholder="Write Comment..."></textarea>
                        <button className="mt-40">Post Comment <i
                            className="fa-solid fa-arrow-right-long"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}