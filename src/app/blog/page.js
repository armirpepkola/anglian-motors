import PageBannerSection from "@/components/sections/PageBannerSection";
import BlogSingleSection from "@/components/sections/BlogSingleSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Blog';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function Blog() {
    const menus = [
        {
            label: 'latest news',
            link: '/blog'
        },
        {
            label: 'Right Sidebar',
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
            <BlogSingleSection />
            {/*===== Blog single area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}