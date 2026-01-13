import { ExternalLink } from "lucide-react";
import bisonLogo from "@/assets/bison-wallet-logo.png";

const BisonWalletSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
          <div className="flex-shrink-0">
            <img 
              src={bisonLogo} 
              alt="Bison Wallet" 
              className="w-20 h-20 rounded-xl"
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              DCRDEX <span className="text-muted-foreground font-normal text-lg">(Now Bison Wallet)</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Atomic-swap DEX with self-custody trading. Supports USDC & USDT on Polygon.
            </p>
            <a 
              href="https://bisonwallet.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              bisonwallet.org
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BisonWalletSection;
