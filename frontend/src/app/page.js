import HeaderSection from "@/components/HeaderSection";
import MiddleSection from "@/components/MiddleSection/MiddleSection";

export default function Home() {
  return (
    <main className="font-poppins">
      <header>
        <HeaderSection />
        <MiddleSection />
      </header>
    </main>
  );
}
