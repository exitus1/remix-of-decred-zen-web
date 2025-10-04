import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract minimalist background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] border border-primary/10 rounded-full" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] border border-primary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-primary/5 rounded-full blur-[80px]" />
      
      {/* Animated glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      
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
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Engineered for Sovereignty</span>
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
