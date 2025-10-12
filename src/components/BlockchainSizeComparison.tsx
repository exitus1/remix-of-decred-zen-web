import { Card } from "@/components/ui/card";
import { HardDrive, Award } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";
import bitcoinIcon from "@/assets/bitcoin-icon.png";
import moneroLogo from "@/assets/monero-logo.png";
import zcashLogo from "@/assets/zcash-logo.png";
import litecoinLogo from "@/assets/litecoin-logo.png";

const BlockchainSizeComparison = () => {
  const blockchains = [
    { name: "Decred", size: 15.7, unit: "GB", logo: decredIcon, highlight: true },
    { name: "Litecoin", size: 205, unit: "GB", logo: litecoinLogo },
    { name: "Monero", size: 240, unit: "GB", logo: moneroLogo },
    { name: "Zcash", size: 266, unit: "GB", logo: zcashLogo },
    { name: "Bitcoin", size: 689, unit: "GB", logo: bitcoinIcon },
  ];

  const maxSize = 689;

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Blockchain Size Comparison
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Decred's efficient blockchain design keeps storage requirements minimal
          </p>
          <div className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-primary font-semibold flex items-center gap-2 justify-center">
              <Award className="w-5 h-5" />
              Under 20 GB - 44x smaller than Bitcoin
            </span>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in">
          {blockchains.map((chain, index) => {
            const widthPercent = (chain.size / maxSize) * 100;
            const isDecred = chain.highlight;
            
            return (
              <Card
                key={chain.name}
                className={`p-6 ${
                  isDecred
                    ? "bg-primary/20 border-primary hover:border-primary/80"
                    : "bg-card/50 border-border/50 hover:border-primary/30"
                } backdrop-blur-sm transition-all hover-scale`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-3 min-w-[180px]">
                    {chain.logo && (
                      <img
                        src={chain.logo}
                        alt={`${chain.name} logo`}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div>
                      <h3 className={`text-xl font-bold ${isDecred ? "text-primary" : ""}`}>
                        {chain.name}
                      </h3>
                      {isDecred && (
                        <p className="text-xs text-primary/80 font-semibold">Most Efficient</p>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="w-full bg-muted/30 rounded-full h-8 overflow-hidden">
                      <div
                        className={`h-full rounded-full flex items-center justify-end pr-3 transition-all duration-1000 ${
                          isDecred
                            ? "bg-gradient-to-r from-primary to-primary/80"
                            : "bg-muted-foreground/40"
                        }`}
                        style={{ width: `${Math.max(widthPercent, 3)}%` }}
                      >
                        {widthPercent > 15 && (
                          <span className={`text-sm font-bold ${isDecred ? "text-primary-foreground" : "text-foreground"}`}>
                            {`${chain.size} ${chain.unit}`}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[120px] text-right">
                    <p className={`text-2xl font-bold ${isDecred ? "text-primary" : ""}`}>
                      {`${chain.size} ${chain.unit}`}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <HardDrive className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Low Storage Requirements</h3>
            <p className="text-muted-foreground">
              Run a full node on any modern device without needing enterprise-grade storage solutions.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Faster Sync Times</h3>
            <p className="text-muted-foreground">
              Smaller blockchain means quicker initial synchronization and easier maintenance.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <HardDrive className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">More Accessible</h3>
            <p className="text-muted-foreground">
              Lower barriers to entry for running nodes strengthens network decentralization.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSizeComparison;
