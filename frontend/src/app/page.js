import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import GridSection from "@/components/LastSection/GridSection";
import SwiperSection from "@/components/LastSection/SwiperSection";
import MiddleSection from "@/components/MiddleSection/MiddleSection";

export default function Home() {
  return (
    <main className="font-poppins">
      <HeaderSection />
      <MiddleSection />
      <SwiperSection />
      <GridSection />
      <FooterSection />
    </main>
  );
}
