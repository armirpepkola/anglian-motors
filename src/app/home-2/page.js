import HeroSectionTwo from "@/components/HeroSectionTwo";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";
import WorkSectionOne from "@/components/sections/WorkSectionOne";
import AchievementSectionTwo from "@/components/sections/AchievementSectionTwo";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import InvolveSectionTwo from "@/components/sections/InvolveSectionTwo";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";
import TestimonialSectionTwo from "@/components/sections/TestimonialSectionTwo";
import BlogSectionTwo from "@/components/sections/BlogSectionTwo";

export const metadata = {
    title: "Home 2 | Charger- EV Charging Station React Next Js Template",
    description: "Home 2 | Charger- EV Charging Station React Next Js Template",
};

export default function HomeTwo() {
    return (
        <>
            {/*===== Hero area start here =====*/}
            <HeroSectionTwo />
            {/*===== Hero area end here =====*/}

            {/*===== About area start here =====*/}
            <AboutSectionTwo customClass={'pt-130'}/>
            {/*===== About area end here =====*/}

            {/*===== Work area start here =====*/}
            <WorkSectionOne customClass={'sub-bg'}/>
            {/*===== Work area end here =====*/}

            {/*===== Achievement area start here =====*/}
            <AchievementSectionTwo />
            {/*===== Achievement area end here =====*/}

            {/*===== Service area start here =====*/}
            <ServiceSectionTwo />
            {/*===== Service area end here =====*/}

            {/*===== Involved area start here =====*/}
            <InvolveSectionTwo />
            {/*===== Involved area end here =====*/}

            {/*===== Team area start here =====*/}
            <TeamSectionTwo />
            {/*===== Team area end here =====*/}

            {/*===== Testimonial area start here =====*/}
            <TestimonialSectionTwo />
            {/*===== Testimonial area end here =====*/}

            {/*===== Blog area start here =====*/}
            <BlogSectionTwo />
            {/*===== Blog area end here =====*/}
        </>
    )
}