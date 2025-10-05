import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Subtle animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
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
