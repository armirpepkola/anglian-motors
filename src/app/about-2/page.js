import PageBannerSection from "@/components/sections/PageBannerSection";
import AboutSectionFour from "@/components/sections/AboutSectionFour";
import achievementBg2 from "@/assets/images/bg/achievement-bg2.jpg";
import AchievementSectionOne from "@/components/sections/AchievementSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import StatisticSectionOne from "@/components/sections/StatisticSectionOne";
import AchievementSectionFive from "@/components/sections/AchievementSectionFive";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'About Us 02';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function AboutTwo() {
    const menus = [
        {
            label: 'About Us 02',
            link: ''
        }
    ];

    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection title={pageName} menus={menus} />
            {/*===== Page banner area end here =====*/}

            {/*===== About area start here =====*/}
            <AboutSectionFour />
            {/*===== About area end here =====*/}

            {/*===== Achievement area start here =====*/}
            <AchievementSectionOne
                title="We enhance your vehicles’ beauty"
                bgImage={achievementBg2}
            />
            {/*===== Achievement area end here =====*/}

            {/*===== Team area start here =====*/}
            <TeamSectionOne />
            {/*===== Team area end here =====*/}

            {/*===== Statistic area start here =====*/}
            <StatisticSectionOne />
            {/*===== Statistic area start here =====*/}

            {/*===== Achievement area start here =====*/}
            <AchievementSectionFive />
            {/*===== Achievement area end here =====*/}

            {/*===== Testimonial area start here =====*/}
            <TestimonialSectionOne />
            {/*===== Testimonial area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}