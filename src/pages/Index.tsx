import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Governance from "@/components/Governance";
import Treasury from "@/components/Treasury";
import BackgroundShapes from "@/components/BackgroundShapes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundShapes />
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Treasury />
      <Governance />
    </div>
  );
};

export default Index;
