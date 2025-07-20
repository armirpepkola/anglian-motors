import PageBannerSection from "@/components/sections/PageBannerSection";
import BlogSectionFive from "@/components/sections/BlogSectionFive";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Blog 3';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function BlogThree() {
    const menus = [
        {
            label: 'Blog Grid',
            link: ''
        },
        {
            label: '3 Columns',
            link: ''
        },
    ];

    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection
                title={pageName}
                menus={menus}
            />
            {/*===== Page banner area end here =====*/}

            {/*===== Blog area start here =====*/}
            <BlogSectionFive />
            {/*===== Blog area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}