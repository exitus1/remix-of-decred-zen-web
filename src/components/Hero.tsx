import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import walletImage from "@/assets/decrediton-wallet-ui.png";
import mobileWalletImage from "@/assets/cakewallet-mobile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Soft light glow in top left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-8 flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in mb-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Decentralized Governance for{" "}
            <span className="text-primary">Digital Currency</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trustless, stakeholder-governed cryptocurrency you can trust. Experience true decentralization without compromising security or functionality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button 
              size="lg" 
              className="text-base px-8 h-12 group"
            >
              Get started for free
            </Button>
            
            <a 
              href="#features" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Learn about Decred</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* No central authority text */}
          <p className="text-sm text-muted-foreground/70">
            No central authority required
          </p>
        </div>
        
        {/* Wallet Images at bottom */}
        <div className="relative max-w-6xl mx-auto w-full mt-auto mb-0 flex items-end gap-6 justify-center">
          <div className="flex-1 max-w-4xl">
            <img 
              src={walletImage} 
              alt="Decred Desktop Wallet Interface" 
              className="w-full h-auto rounded-t-lg shadow-2xl"
            />
          </div>
          <div className="w-64 flex-shrink-0 pb-4">
            <img 
              src={mobileWalletImage} 
              alt="Cake Wallet Mobile Interface" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
