import HeroSectionOne from "@/components/sections/HeroSectionOne";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import VideoSectionOne from "@/components/sections/VideoSectionOne";
import WorkSectionOne from "@/components/sections/WorkSectionOne";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import AchievementSectionOne from "@/components/sections/AchievementSectionOne";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import InvolveSectionOne from "@/components/sections/InvolveSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import BlogSectionOne from "@/components/sections/BlogSectionOne";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

import achievementImage from "@/assets/images/bg/achievement.jpg";

export const metadata = {
      title: "Charger- EV Charging Station Next Js Template",
      description: "Charger- EV Charging Station Next Js Template",
};

export default function Home() {
  return (
    <>
        {/*===== Hero Section Start =====*/}
        <HeroSectionOne />
        {/*===== Hero Section end =====*/}

        {/*===== About area start here =====*/}
        <AboutSectionOne />
        {/*===== About area end here =====*/}

        {/*===== Video area start here =====*/}
        <VideoSectionOne />
        {/*===== Video area end here =====*/}

        {/*===== Work area start here =====*/}
        <WorkSectionOne />
        {/*===== Work area end here =====*/}

        {/*===== Service area start here =====*/}
        <ServiceSectionOne />
        {/*===== Service area end here =====*/}

        {/*===== Achievement area start here =====*/}
        <AchievementSectionOne
            title="Your Safety is Our Top Priority."
            bgImage={achievementImage}
        />
        {/*===== Achievement area end here =====*/}

        {/*===== Project area start here =====*/}
        <ProjectSectionOne />
        {/*===== Project area end here =====*/}

        {/*===== Involve area start here =====*/}
        <InvolveSectionOne />
        {/*===== Involve area end here =====*/}

        {/*===== Testimonial area start here =====*/}
        <TestimonialSectionOne />
        {/*===== Testimonial area end here =====*/}

        {/*===== Team area start here =====*/}
        <TeamSectionOne />
        {/*===== Team area end here =====*/}

        {/*===== Blog area start here =====*/}
        <BlogSectionOne />
        {/*Blog area end here*/}

        {/*===== Our info area start here =====*/}
        <OurInfoOneSection />
        {/*===== Our info area end here =====*/}
    </>
  );
}
