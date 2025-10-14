import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";
import heroBg from "@/assets/hero-tech-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating neon orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: i % 2 === 0 ? '#00ff41' : '#00d4ff',
              boxShadow: `0 0 ${Math.random() * 30 + 20}px currentColor, 0 0 ${Math.random() * 60 + 40}px currentColor`,
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
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
