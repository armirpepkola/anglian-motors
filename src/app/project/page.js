import PageBannerSection from "@/components/sections/PageBannerSection";
import ProjectBannerSection from "@/components/sections/ProjectBannerSection";
import ProjectSectionFive from "@/components/sections/ProjectSectionFive";
import AchievementSectionFive from "@/components/sections/AchievementSectionFive";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Projects 01';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function Project() {
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

            {/*===== Project one banner area start here =====*/}
            <ProjectBannerSection />
            {/*===== Project one banner area end here =====*/}

            {/*===== Project area start here =====*/}
            <ProjectSectionFive />
            {/*===== Project area end here =====*/}

            {/*===== achievement area start here =====*/}
            <AchievementSectionFive customClass="mt-130 mb-130"/>
            {/*===== achievement area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}