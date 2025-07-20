import PageBannerSection from "@/components/sections/PageBannerSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";
import FaqSection from "@/components/sections/FaqSection";

const pageName = "FAQ's";

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `Frequently Asked Questions | Charger- EV Charging Station React Next Js Template`,
};

export default function Faq() {
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

            {/*===== FAQ area start here =====*/}
            <FaqSection />
            {/*===== FAQ area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}