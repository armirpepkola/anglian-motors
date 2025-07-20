import PageBannerSection from "@/components/sections/PageBannerSection";
import ProjectSingleSection from "@/components/sections/ProjectSingleSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const menus = [
    {
        label: 'Project 01',
        link: '/project'
    },
    {
        label: 'Project: Planting 300 trees in the city',
        link: ''
    },
];

export const metadata = {
    title: "Project | Charger- EV Charging Station React Next Js Template",
    description: "Project | Charger- EV Charging Station React Next Js Template",
};

export default function ProjectSlug() {
    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection
                title="Project: Planting 300 trees in the city"
                menus={menus}
            />
            {/*===== Page banner area end here =====*/}

            {/*===== Project single area start here =====*/}
            <ProjectSingleSection />
            {/*===== Project single area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}