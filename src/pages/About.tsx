import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import Treasury from "@/components/Treasury";
import ArtisticBackground from "@/components/ArtisticBackground";
import DecredEvolution from "@/components/DecredEvolution";
import CoinMixing from "@/components/CoinMixing";
import ConsensusUpgrade from "@/components/ConsensusUpgrade";
import PowerToChoose from "@/components/PowerToChoose";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      <div className="pt-20">
        <DecredEvolution />
      </div>
      <PowerToChoose />
      <Features />
      <CoinMixing />
      <Treasury />
      <ConsensusUpgrade />
    </div>
  );
};

export default About;
