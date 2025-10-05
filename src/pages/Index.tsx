import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Governance from "@/components/Governance";
import Treasury from "@/components/Treasury";
import ArtisticBackground from "@/components/ArtisticBackground";
import DecredEvolution from "@/components/DecredEvolution";
import CoinMixing from "@/components/CoinMixing";
import HybridConsensus from "@/components/HybridConsensus";
import DecredSPV from "@/components/DecredSPV";
import StakeShuffle from "@/components/StakeShuffle";
import DCRDEX from "@/components/DCRDEX";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      <Hero />
      <Stats />
      <DecredEvolution />
      <HybridConsensus />
      <Features />
      <DecredSPV />
      <StakeShuffle />
      <CoinMixing />
      <DCRDEX />
      <Treasury />
      <Governance />
    </div>
  );
};

export default Index;
