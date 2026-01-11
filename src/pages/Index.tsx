import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      <Hero />
      <Stats />
      <SupplyShock />
      <PowerToChoose />
      <DecredEvolution />
      <HybridConsensus />
      <Features />
      <CoinMixing />
      <Treasury />
      <ConsensusUpgrade />
    </div>
  );
};

export default Index;
