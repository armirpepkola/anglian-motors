import PageBannerSection from "@/components/sections/PageBannerSection";
import TeamSectionFour from "@/components/sections/TeamSectionFour";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Our Name';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function Team() {
    const menus = [
        {
            label: pageName,
            link: '',
        },
    ];

    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection
                title={pageName}
                menus={menus}
            />
            {/*===== Page banner area end here =====*/}

            {/*===== Team area start here =====*/}
            <TeamSectionFour />
            {/*===== Team area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}