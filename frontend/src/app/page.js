import HeaderSection from "@/components/HeaderSection";
import GridSection from "@/components/LastSection/GridSection";
import SwiperSection from "@/components/LastSection/SwiperSection";
import MiddleSection from "@/components/MiddleSection/MiddleSection";

export default function Home() {
  return (
    <main className="font-poppins">
      <header>
        <HeaderSection />
        <MiddleSection />
        <SwiperSection />
        <GridSection />
      </header>
    </main>
  );
}
