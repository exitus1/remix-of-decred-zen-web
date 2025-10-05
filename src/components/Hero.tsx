import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tech-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1b2a] to-[#1b263b]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-[60px] animate-glow-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Technical grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#f97316' : '#3b82f6',
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Subtle vignette for text readability */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
      
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
