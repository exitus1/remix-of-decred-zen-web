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
import GovernanceLayer from "@/components/GovernanceLayer";
import DecredSPV from "@/components/DecredSPV";
import StakeShuffle from "@/components/StakeShuffle";
import DCRDEX from "@/components/DCRDEX";
import ConsensusUpgrade from "@/components/ConsensusUpgrade";
import GovernanceComparison from "@/components/GovernanceComparison";
import BlockchainSizeComparison from "@/components/BlockchainSizeComparison";
import MoneroComparison from "@/components/MoneroComparison";
import Roadmap from "@/components/Roadmap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      <Hero />
      <Stats />
      <DecredEvolution />
      <HybridConsensus />
      <GovernanceLayer />
      <Features />
      <DecredSPV />
      <StakeShuffle />
      <CoinMixing />
      <BlockchainSizeComparison />
      <DCRDEX />
      <MoneroComparison />
      <GovernanceComparison />
      <Treasury />
      <Governance />
      <ConsensusUpgrade />
      <Roadmap />
    </div>
  );
};

export default Index;
