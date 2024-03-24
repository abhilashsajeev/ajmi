import Banner from "@/components/Banner";
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
      <div className="navbar bg-base-100">
        <div className="flex-1 ml-3">
          <LogoIcon style={{ fontSize: "4em" }} />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <a>HOME</a>
            </li>
            <li className="font-bold">
              <a>OUR STORY</a>
            </li>
            <li className="font-bold">
              <a>SERVICES</a>
            </li>
            <li className="font-bold">
              <a>PRODUCTS</a>
            </li>
            <li className="font-bold">
              <a>OUR PROJECTS</a>
            </li>
            <li className="font-bold">
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
      <MainSection />
      <Banner />
      <Promo />
      <Offer />
      <HowItWorks />
      <Portfolio />

      <LastSection />
      <Footer />
    </main>
  );
}
