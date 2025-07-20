import PageBannerSection from "@/components/sections/PageBannerSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";
import BlogSectionFour from "@/components/sections/BlogSectionFour";

const pageName = 'Blog 2';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function BlogTwo() {
    const menus = [
        {
            label: 'Blog Grid',
            link: '/blog'
        },
        {
            label: '2 Columns',
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
            <BlogSectionFour />
            {/*===== Blog area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}