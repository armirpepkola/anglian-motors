import HeroSectionTwo from "@/components/HeroSectionTwo";
import ViewSectionOne from "@/components/sections/ViewSectionOne";
import AboutSectionThree from "@/components/sections/AboutSectionThree";
import WorkSectionTwo from "@/components/sections/WorkSectionTwo";
import AchievementSectionFive from "@/components/sections/AchievementSectionFive";
import ProjectSectionFive from "@/components/sections/ProjectSectionFive";

export const metadata = {
    title: "Home 4 | Charger- EV Charging Station React Next Js Template",
    description: "Home 4 | Charger- EV Charging Station React Next Js Template",
};

export default function HomeFour() {
    return (
        <>
            {/*===== Hero area start here =====*/}
            <HeroSectionTwo />
            {/*===== Hero area end here =====*/}

            {/*===== View area start here=====*/}
            <ViewSectionOne />
            {/*===== View area end here =====*/}

            {/*===== About area start here =====*/}
            <AboutSectionThree />
            {/*===== About area end here =====*/}

            {/*===== Work area start here =====*/}
            <WorkSectionTwo />
            {/*===== Work area end here =====*/}

            {/*===== achievement area start here =====*/}
            <AchievementSectionFive />
            {/*===== achievement area end here =====*/}

            {/*===== Project area start here =====*/}
            <ProjectSectionFive />
            {/*===== Project area end here =====*/}
        </>
    )
}