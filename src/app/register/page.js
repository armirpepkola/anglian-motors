import OurInfoOneSection from "@/components/sections/OurInfoOneSection";
import PageBannerSection from "@/components/sections/PageBannerSection";
import RegisterFormSection from "@/components/sections/RegisterFormSection";

export const metadata = {
    title: "Register | Charger- EV Charging Station React Next Js Template",
    description: "Register | Charger- EV Charging Station React Next Js Template",
};

export default function Register() {
    const menus = [
        {
            label: 'create account',
            link: ''
        }
    ];

    return (
        <>
            {/*===== Page banner area start here =====*/}
            <PageBannerSection
                title="create account"
                menus={menus}
            />
            {/*===== Page banner area end here=====*/}

            {/*===== Register form area start here =====*/}
            <RegisterFormSection />
            {/*===== Register form area start here=====*/}

            {/*===== Our info area start here =====*/}
            <OurInfoOneSection />
            {/*===== Our info area end here =====*/}
        </>
    )
}