import { Urbanist } from "next/font/google";
import "./globals.css";
import { BasicLayout } from "@/layouts";
import { Toaster } from "react-hot-toast";
import { toastSettings } from "@/config";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AuthState } from "@/context/AuthContext";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthState>
          <BasicLayout>
            <Toaster
              position="top-center"
              toastOptions={toastSettings}
              reverseOrder={false}
            />
            {children}
          </BasicLayout>
        </AuthState>
      </body>
    </html>
  );
}
