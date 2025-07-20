import Link from "next/link";
import {teamMembers} from "@/data/team";
import Image from "next/image";

export default function TeamSectionFour() {
    return (
        <section className="team-three pt-130 pb-130">
            <div className="container">
                <div className="row g-4">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="col-lg-4 col-md-6">
                            <div className="team-three__item">
                                <Link href="/team/sana" className="image d-block">
                                    <Image src={member.image} alt={member.name} className="h-auto"/>
                                </Link>
                                <div className="team-info">
                                    <a className="d-block" href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="d-block" href="#0"><i className="fa-brands fa-twitter"></i></a>
                                    <a className="d-block" href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                                <div className="content">
                                    <h3><Link href="/team/sana">{member.name}</Link></h3>
                                    <span>{member.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
