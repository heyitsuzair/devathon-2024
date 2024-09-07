import { DashboardLayout } from "@/layouts";
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

export const metadata = {
  title: "Nextjs App",
};

export default function RootLayout({ children }) {
  return (

    <AuthState>
      <DashboardLayout>
        <Toaster
          position="top-center"
          toastOptions={toastSettings}
          reverseOrder={false}
        />
        {children}
      </DashboardLayout>
    </AuthState>
  );
}
