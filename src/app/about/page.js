import PageBannerSection from "@/components/sections/PageBannerSection";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";
import AchievementSectionOne from "@/components/sections/AchievementSectionOne";

import achievementBg2 from "@/assets/images/bg/achievement-bg2.jpg";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";
import InvolveSectionTwoHelp from "@/components/sections/InvolveSectionTwoHelp";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'About Us 01';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station Next Js Template`,
};

export default function About() {
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

            {/*===== About area start here =====*/}
            <AboutSectionTwo customClass='pt-130'/>
            {/*===== About area end here =====*/}

            {/*===== Achievement area start here =====*/}
            <AchievementSectionOne
                title="We enhance your vehicles’ beauty"
                bgImage={achievementBg2}
            />
            {/*===== Achievement area end here =====*/}

            {/*===== Team area start here =====*/}
            <TeamSectionTwo/>
            {/*===== Team area end here =====*/}

            {/*===== Involved area start here =====*/}
            <InvolveSectionTwoHelp/>
            {/*===== Involved area end here =====*/}

            {/*===== Testimonial area start here =====*/}
            <TestimonialSectionOne/>
            {/*===== Testimonial area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection/>
            {/*===== Our info area end here =====*/}
        </>
    )
}