import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Treasury from "@/components/Treasury";
import ArtisticBackground from "@/components/ArtisticBackground";
import DecredEvolution from "@/components/DecredEvolution";
import CoinMixing from "@/components/CoinMixing";
import PowerToChoose from "@/components/PowerToChoose";
import LiveStats from "@/components/LiveStats";
import HybridSecurity from "@/components/HybridSecurity";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      <div className="pt-20">
        <DecredEvolution />
      </div>
      <LiveStats />
      <div id="governance" className="scroll-mt-24">
        <PowerToChoose />
      </div>
      <div id="security" className="scroll-mt-24">
        <HybridSecurity />
      </div>
      <div id="privacy" className="scroll-mt-24">
        <CoinMixing />
      </div>
      <div id="funding" className="scroll-mt-24">
        <Treasury />
      </div>
      <Footer />
    </div>
  );
};

export default About;
