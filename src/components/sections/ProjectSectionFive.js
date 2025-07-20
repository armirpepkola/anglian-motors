import project5Img1 from "@/assets/images/project/project1.jpg";
import project5Img2 from "@/assets/images/project/project2.jpg";
import project5Img3 from "@/assets/images/project/project3.jpg";
import project5Img4 from "@/assets/images/project/project4.jpg";
import Link from "next/link";
import Image from "next/image";

export default function ProjectSectionFive() {
    return (
        <section className="project-five pt-130">
            <div className="section-header text-center">
                <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> COMPLETED PROJECT</h5>
                <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                    Explore the world with your <br/> own way of driving
                </h2>
            </div>
            <div className="row g-0">
                <div className="col-xxl-3 wow fadeInDown col-lg-6" data-wow-duration="1.2s" data-wow-delay=".2s">
                    <div className="project-five__image">
                        <Image src={project5Img1} alt="image" className="h-auto"/>
                    </div>
                </div>
                <div className="col-xxl-3 wow fadeInDown col-lg-6" data-wow-duration="1.4s" data-wow-delay=".4s">
                    <div className="project-five__item sub-bg">
                        <div className="project-five__content bg-white">
                            <h3>
                                <Link href="/project/single">Protective luxury car detailing: interior vs. exterior</Link>
                            </h3>
                            <p>We maintain a busy network of forestry and social development staff
                                along with local
                                facilitators in the areas we work.</p>
                            <Link href="/project/single" className="btn-two">
                                <span>details project</span> <i className="fa-solid fa-angles-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 wow fadeInDown col-lg-6" data-wow-duration="1.6s" data-wow-delay=".6s">
                    <div className="project-five__image">
                        <Image src={project5Img2} alt="image" className="h-auto"/>
                    </div>
                </div>
                <div className="col-xxl-3 wow fadeInDown col-lg-6" data-wow-duration="1.8s" data-wow-delay=".8s">
                    <div className="project-five__item sub-bg">
                        <div className="project-five__content bg-white">
                            <h3><Link href="/project/single">The ultimate guide to car detailing products</Link></h3>
                            <p>We maintain a busy network of forestry and social development staff
                                along with local
                                facilitators in the areas we work.</p>
                            <Link href="/project/single" className="btn-two"><span>details project</span> <i
                                className="fa-solid fa-angles-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                    <div className="project-five__item sub-bg">
                        <div className="project-five__content bg-white">
                            <h3>
                                <Link href="/project/single">The top 10 benefits of regular car detailing</Link>
                            </h3>
                            <p>We maintain a busy network of forestry and social development staff
                                along with local
                                facilitators in the areas we work.</p>
                            <Link href="/project/single" className="btn-two"><span>details project</span> <i
                                className="fa-solid fa-angles-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                    <div className="project-five__image">
                        <Image src={project5Img3} alt="image" className="h-auto"/>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-6 wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                    <div className="project-five__item sub-bg">
                        <div className="project-five__content bg-white">
                            <h3>
                                <Link href="/project/single">Common auto repair & painting mistakes to avoid</Link>
                            </h3>
                            <p>We maintain a busy network of forestry and social development staff
                                along with local
                                facilitators in the areas we work.</p>
                            <Link href="/project/single" className="btn-two">
                                <span>details project</span> <i className="fa-solid fa-angles-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                    <div className="project-five__image">
                        <Image src={project5Img4} alt="image" className="h-auto"/>
                    </div>
                </div>
            </div>
        </section>
    )
}