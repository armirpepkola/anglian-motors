import {teamsOneData} from "@/data/team"
import Image from "next/image";

export default function TeamSectionTwo() {
    return (
        <section className="team team-two pt-130 pb-130 sub-bg">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> OUR TEAM MEMBERS</h5>
                    <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">The amazing team
                        behind <br/>
                        our company</h2>
                </div>
                <div className="row g-4">
                    {teamsOneData.map((team) => (
                        <div key={team.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration={team.duration}
                             data-wow-delay={team.delay}>
                            <div className="team__item team-two__item">
                                <div className="team__item-image">
                                    <Image src={team.image} alt="image" className="h-auto"/>
                                    <div className="team__item-image-icon social-icon">
                                        <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                                <h3><a href="/team-single">{team.name}</a></h3>
                                <span>{team.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}