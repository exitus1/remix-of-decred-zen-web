import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Governance from "@/components/Governance";
import Treasury from "@/components/Treasury";
import NeonCodeBackground from "@/components/NeonCodeBackground";
import DecredEvolution from "@/components/DecredEvolution";
import CoinMixing from "@/components/CoinMixing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <NeonCodeBackground />
      <Navigation />
      <Hero />
      <Stats />
      <DecredEvolution />
      <Features />
      <CoinMixing />
      <Treasury />
      <Governance />
    </div>
  );
};

export default Index;
