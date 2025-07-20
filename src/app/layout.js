import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

// Font Awesome
import '@/assets/css/all.min.css';
// Animate css
import '@/assets/css/animate.css';
// Nice select css
import '@/assets/css/nice-select.css';
// Flarticon
import '@/assets/css/flaticon.css';
// Style scss
import '@/assets/sass/style.scss';

import Script from "next/script";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import {AppWrapper} from "@/context";
import WowProvider from "@/provider/WowProvider";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "Charger- EV Charging Station React Next Js Template",
  description: "Charger- EV Charging Station React Next Js Template",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      {/*===== Initializes WOW.js globally =====*/}
      <WowProvider/>

      {/*===== Preloader area start =====*/}
      <Preloader />
      {/*===== Preloader area end =====*/}

      <AppWrapper>
          {/*===== Header area start here =====*/}
          <Header />
          {/*===== Header area end here =====*/}

          {/*===== Sidebar area start here =====*/}
          <Sidebar />
          {/*===== Sidebar area end here =====*/}

          <main>
              <div>
              {children}
              </div>
          </main>
      </AppWrapper>

      {/*===== Footer area start here =====*/}
      <Footer />
      {/* Footer area end here */}

      {/*===== Back to top area start here =====*/}
      <BackToTop />
      {/*===== Back to top area end here =====*/}

      <div id="modal-root"></div>

      {/*===== Bootstrap min Js =====*/}
      <Script src="assets/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}
