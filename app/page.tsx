import Banner from "@/components/Banner";
import CollectionPage from "@/components/Collections/Collection";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import LastSection from "@/components/LastSection";
import Form from "@/components/Login/Form";
import LogoIcon from "@/components/Logo";
import MainSection from "@/components/MainSection";
import Offer from "@/components/Offer";
import Portfolio from "@/components/Portfolio";
import Promo from "@/components/Promo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainSection />
      <Banner />
      <Promo />
      <Offer />
      <CollectionPage />
      <HowItWorks />
      <Portfolio />

      <LastSection />
    </main>
  );
}
