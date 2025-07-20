import involveImg from "@/assets/images/bg/involve.jpg";

export default function InvolveSectionOne() {
    return (
        <section className="involve pb-130">
            <div className="container">
                <div className="involve__bg pt-130 pb-130" style={{ backgroundImage: `url(${involveImg.src})`}}>
                    <div className="involve__item text-center">
                        <div className="section-header">
                            <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s"> Get Involved
                                Now</h5>
                            <h2 className="text-white wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">We
                                Have
                                MAKE YOUR CAR LAST LONGER</h2>
                        </div>
                        <a href="#0" className="btn-one-light wow fadeInUp" data-wow-duration="1.6s"
                           data-wow-delay=".6s"><span>join with us</span> <i
                            className="fa-solid fa-angles-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}