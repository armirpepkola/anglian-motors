import {teamsOneData} from "@/data/team"
import Image from "next/image";

export default function TeamSectionOne() {
    return (
        <section className="team pt-130">
            <div className="container">
                <div className="pb-65 bor-bottom">
                    <div className="section-header text-center">
                        <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">OUR TEAM MEMBERS</h5>
                        <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">MEET OUR TEAM</h2>
                    </div>
                    <div className="row g-4">
                        {teamsOneData.map((member) => (
                            <div key={member.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                 data-wow-duration={member.duration}
                                 data-wow-delay={member.delay}>
                                <div className="team__item">
                                    <div className="team__item-image">
                                        <Image src={member.image} alt="image" className="h-auto"/>
                                        <div className="team__item-image-icon social-icon">
                                            <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <h3><a href="team-single">{member.name}</a></h3>
                                    <span>{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}