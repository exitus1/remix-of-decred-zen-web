import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Treasury from "@/components/Treasury";
import ArtisticBackground from "@/components/ArtisticBackground";
import DecredEvolution from "@/components/DecredEvolution";
import CoinMixing from "@/components/CoinMixing";
import HybridConsensus from "@/components/HybridConsensus";
import ConsensusUpgrade from "@/components/ConsensusUpgrade";
import SupplyShock from "@/components/SupplyShock";
import PowerToChoose from "@/components/PowerToChoose";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      <div className="pt-20">
        <DecredEvolution />
      </div>
      <Stats />
      <SupplyShock />
      <PowerToChoose />
      <HybridConsensus />
      <Features />
      <CoinMixing />
      <Treasury />
      <ConsensusUpgrade />
    </div>
  );
};

export default About;
