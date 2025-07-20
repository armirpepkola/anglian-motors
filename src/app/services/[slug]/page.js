import PageBannerSection from "@/components/sections/PageBannerSection";
import ServiceSingleSection from "@/components/sections/ServiceSingleSection";
import PageServicesSection from "@/components/sections/PageServicesSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Animal Resque';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function ServiceSingle() {
    const menus = [
        {
            label: 'Services',
            link: '/services'
        },
        {
            label: pageName,
            link: '',
        },
    ];

    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection title={pageName} menus={menus} />
            {/*===== Page banner area end here =====*/}

            {/*===== Service single area start here =====*/}
            <ServiceSingleSection />
            {/*===== Service single area end here =====*/}

            {/*===== Page services area start here =====*/}
            <PageServicesSection />
            {/*===== Page services area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}