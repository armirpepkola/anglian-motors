import PageBannerSection from "@/components/sections/PageBannerSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ContactMapSection from "@/components/sections/ContactMapSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Contact Us';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function Contact() {
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

            {/*===== contact form area start here =====*/}
            <ContactFormSection />
            {/*===== contact form area end here =====*/}

            {/*===== Contact map area start here =====*/}
            <ContactMapSection />
            {/*===== Contact map area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}