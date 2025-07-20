import PageBannerSection from "@/components/sections/PageBannerSection";
import Link from "next/link";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Error 404';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function Error404() {
    const menus = [
        {
            label: pageName,
            link: ''
        }
    ];

    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection
                title={pageName}
                menus={menus}
            />
            {/*===== Page banner area end here =====*/}

            {/*===== Error area start here =====*/}
            <section className="error pt-130 pb-130">
                <div className="container">
                    <h1>4<span className="primary-color">0</span>4</h1>
                    <h2>Oops! Page Not Found.</h2>
                    <p>The page you are looking for was never existed.</p>
                    <Link href="/public" className="btn-one px-5 mt-40">
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>BACK HOME</span>
                    </Link>
                </div>
            </section>
            {/*===== Error area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}