import PageBannerSection from "@/components/sections/PageBannerSection";
import TeamSingleSection from "@/components/sections/TeamSingleSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Mark R. Stuckey';

export const metadata = {
    title: "Team | Charger- EV Charging Station React Next Js Template",
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function TeamSlug() {
    const menus = [
        {
            label: 'Our Team',
            link: '/team'
        },
        {
            label: pageName,
            link: ''
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

            {/*===== Team single area start here =====*/}
            <TeamSingleSection />
            {/*===== Team single area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}