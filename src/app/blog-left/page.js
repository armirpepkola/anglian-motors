import PageBannerSection from "@/components/sections/PageBannerSection";
import BlogLeftSection from "@/components/sections/BlogLeftSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Blog Left';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function BlogLeft() {
    const menus = [
        {
            label: 'Blog Left',
            link: '/blog'
        },
        {
            label: 'Left Sidebar',
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

            {/*===== Blog single area start here =====*/}
            <BlogLeftSection />
            {/*===== Blog single area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}