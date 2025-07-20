import PageBannerSection from "@/components/sections/PageBannerSection";
import LoginSection from "@/components/sections/LoginSection";
import OurInfoOneSection from "@/components/sections/OurInfoOneSection";

const pageName = 'Login';

export const metadata = {
    title: `${pageName} | Charger- EV Charging Station React Next Js Template`,
    description: `${pageName} | Charger- EV Charging Station React Next Js Template`,
};

export default function Login() {
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

            {/*===== Login area start here =====*/}
            <LoginSection />
            {/*===== Login area end here =====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}