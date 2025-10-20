import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import walletImage from "@/assets/decrediton-wallet-ui.png";
import mobileWalletImage from "@/assets/decred-mobile-wallet-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Jet black center with gray edges - reverse vignette */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-700/30 via-transparent to-neutral-700/30" />
      
      {/* Soft blue pulses */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-[90px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-8 flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Decentralized Credits -{" "}
            <span className="text-primary">Money controlled by its stakeholders</span>
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
        <div className="relative max-w-5xl mx-auto w-full mt-auto mb-0">
          <img 
            src={walletImage} 
            alt="Decred Desktop Wallet Interface" 
            className="w-full h-auto rounded-t-lg shadow-2xl"
          />
          <div className="absolute right-8 bottom-0 w-40 md:w-48 lg:w-56 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src={mobileWalletImage} 
              alt="Decred Mobile Wallet Interface" 
              className="w-full h-auto rounded-2xl shadow-2xl border-2 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
