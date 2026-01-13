import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChangingGameSection from "@/components/ChangingGameSection";
import TimelineSection from "@/components/TimelineSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ChangingGameSection />
        <TimelineSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
