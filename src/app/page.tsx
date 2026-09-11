import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import About from "@/components/About";
import MetricsBar from "@/components/MetricsBar";
import Treatments from "@/components/Treatments";
import TreatmentShowcase from "@/components/TreatmentShowcase";
import LaserDay from "@/components/LaserDay";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Header />
      <Hero />
      <SocialProofBar />
      <About />
      <MetricsBar />
      <Treatments />
      <TreatmentShowcase />
      <LaserDay />
      <Testimonials />
      <FAQ />
      <Appointment />
      <Footer />
    </main>
  );
}
