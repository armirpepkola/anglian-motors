import PageBannerSection from "@/components/sections/PageBannerSection";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogPostDetails from "@/components/blog/BlogPostDetails";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Blog Single Left';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function BlogSingleLeft() {
    const menus = [
        {
            label: 'latest news',
            link: '/blog'
        },
        {
            label: 'latest blog details',
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
            <section className="blog-slingle pt-130 pb-130">
                <div className="container">
                    <div className="row g-4">
                        <BlogSidebar />
                        <BlogPostDetails />
                    </div>
                </div>
            </section>
            {/*===== Blog single area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}