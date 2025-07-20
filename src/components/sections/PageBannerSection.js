import Link from "next/link";

export default function PageBannerSection({ title, menus }) {
    return (
        <section className="page-banner bg-image pt-130 pb-130">
            <div className="container">
                <h2 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">{title}</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                    <Link href="/" className="pe-1">Home :</Link>
                    {menus.map((menu) => (
                        menu.link ? (
                            <Link href={menu.link} key={menu.label} className="pe-1">{menu.label}</Link>
                        ) : (
                            <span className="primary-color" key={menu.label}>{menu.label}</span>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}