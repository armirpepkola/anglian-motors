import PageBannerSection from "@/components/sections/PageBannerSection";
import ProjectSectionTwo from "@/components/sections/ProjectSectionTwo";
import ProjectFilterSection from "@/components/sections/ProjectFilterSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Project 02';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function ProjectTwo() {
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

            {/*===== Project area start here =====*/}
            <ProjectSectionTwo />
            {/*===== Project area end here =====*/}

            {/*===== Project inner two area start here =====*/}
            <ProjectFilterSection />
            {/*===== Project inner two area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}