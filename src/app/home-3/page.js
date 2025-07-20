import HeroSectionThree from "@/components/sections/HeroSectionThree";
import WorkSectionOne from "@/components/sections/WorkSectionOne";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import StatisticSectionOne from "@/components/sections/StatisticSectionOne";
import ProjectSectionTwo from "@/components/sections/ProjectSectionTwo";
import InvolveSectionTwoHelp from "@/components/sections/InvolveSectionTwoHelp";
import TestimonialSectionThree from "@/components/sections/TestimonialSectionThree";
import BlogSectionThree from "@/components/sections/BlogSectionThree";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

export const metadata = {
    title: "Home 3 | Charger- EV Charging Station React Next Js Template",
    description: "Home 3 | Charger- EV Charging Station React Next Js Template",
};

export default function HomeThree() {
    return (
        <>
            {/*===== Banner area start here =====*/}
            <HeroSectionThree />
            {/*===== Banner area end here =====*/}

            {/*===== Work area start here =====*/}
            <WorkSectionOne />
            {/*===== Work area end here =====*/}

            {/*===== About area start here =====*/}
            <AboutSectionTwo />
            {/*===== About area end here =====*/}

            {/*===== Service area start here =====*/}
            <ServiceSectionThree />
            {/*===== Service area end here =====*/}

            {/*===== Statistic area start here =====*/}
            <StatisticSectionOne />
            {/*===== Statistic area end here =====*/}

            {/*===== Project area start here =====*/}
            <ProjectSectionTwo />
            {/*===== Project area end here =====*/}

            {/*===== Involved area start here =====*/}
            <InvolveSectionTwoHelp />
            {/*===== Involved area end here =====*/}

            {/*===== Testimonial area start here =====*/}
            <TestimonialSectionThree />
            {/*===== Testimonial area end here =====*/}

            {/*===== Blog area start here =====*/}
            <BlogSectionThree />
            {/*===== Blog area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}