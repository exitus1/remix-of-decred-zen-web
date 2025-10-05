import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft blue and green neon lighting */}
      <div className="absolute inset-0 bg-background">
        {/* Blue neon glow - top left */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/30 rounded-full blur-[150px] animate-glow-pulse" />
        
        {/* Green neon glow - bottom right */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-green-500/25 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Additional blue accent - center right */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Additional green accent - center left */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[130px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Gradient overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-green-500/10" />
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
