import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";
import heroBg from "@/assets/hero-binary-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Decred Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={decredIcon} 
              alt="Decred" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-glow"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-primary">Money</span>{" "}
            <span className="text-accent">Evolved</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            A hybrid PoW/PoS cryptocurrency with on-chain governance, self-funding treasury, and privacy features. Built for long-term value and true stakeholder control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover-glow"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-border hover:bg-secondary"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
