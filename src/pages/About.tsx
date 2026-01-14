import Navigation from "@/components/Navigation";
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
      <PowerToChoose />
      <HybridSecurity />
      <CoinMixing />
      <Treasury />
    </div>
  );
};

export default About;
