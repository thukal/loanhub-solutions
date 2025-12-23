import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StaffSection from "@/components/StaffSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <StaffSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
