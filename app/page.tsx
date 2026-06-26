import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import ProductSpotlight from "@/components/ProductSpotlight";
import HowItWorks from "@/components/HowItWorks";
import Ingredients from "@/components/Ingredients";
import Testimonials from "@/components/Testimonials";
import FounderSection from "@/components/FounderSection";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <ProductSpotlight />
      <HowItWorks />
      <Ingredients />
      <Testimonials />
      <FounderSection />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
  );
}
