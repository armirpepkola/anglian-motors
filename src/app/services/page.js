import PageBannerSection from "@/components/sections/PageBannerSection";
import WorkSectionThree from "@/components/sections/WorkSectionThree";
import AchievementSectionOne from "@/components/sections/AchievementSectionOne";
import achievementBg2 from "@/assets/images/bg/achievement-bg2.jpg";
import StatisticSectionOne from "@/components/sections/StatisticSectionOne";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Services';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function Services() {
    const menus = [
        {
            label: pageName,
            link: '',
        }
    ];

    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection title={pageName} menus={menus} />
            {/*===== Page banner area end here =====*/}

            {/*===== Work area end here =====*/}
            <WorkSectionThree />
            {/*===== Work area start here =====*/}

            {/*===== Achievement area start here =====*/}
            <AchievementSectionOne bgImage={achievementBg2} title="We enhance your vehicles’ beauty"/>
            {/*===== Achievement area end here =====*/}

            {/*===== Statistic area start here =====*/}
            <StatisticSectionOne customClass="sub-bg"/>
            {/*===== Statistic area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}