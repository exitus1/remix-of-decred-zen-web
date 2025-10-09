import { Card } from "@/components/ui/card";
import { Shield, Lock, FileText, EyeOff, Shuffle, Eye } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";

const CoinMixing = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            StakeShuffle Mixing
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Node-coordinated, non-custodial privacy mixing
          </p>
          <div className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-primary font-semibold flex items-center gap-2 justify-center">
              63% of DCR <img src={decredIcon} alt="DCR" className="w-5 h-5 inline-block rounded-full" /> supply is mixed
            </span>
          </div>
        </div>

        {/* 5-Step Flow Diagram */}
        <div className="mb-16 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1: Initiate */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">Initiate</h3>
                
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-primary">•</span> A: 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-primary">•</span> B: 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-primary">•</span> C: 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Nodes submit identical amounts
                </p>
              </div>
            </Card>

            {/* Step 2: Key Exchange */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">Key Exchange</h3>
                
                <div className="flex-grow flex flex-col items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-3 border border-primary/30">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">Ephemeral Keys</p>
                  <p className="text-xs text-muted-foreground text-center">Temporary public keys</p>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Nodes coordinate P2P
                </p>
              </div>
            </Card>

            {/* Step 3: Shuffle */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">Shuffle</h3>
                
                <div className="flex-grow flex flex-col items-center justify-center mb-4">
                  <div className="relative w-16 h-16 mb-3">
                    <div className="absolute inset-0 rounded-lg bg-primary/30 blur-sm animate-glow-pulse"></div>
                    <div className="relative w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center border border-primary">
                      <Shuffle className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">Mixing...</p>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Addresses encrypted & shuffled
                </p>
              </div>
            </Card>

            {/* Step 4: Sign */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">Sign</h3>
                
                <div className="flex-grow flex flex-col items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-3 border border-primary/30">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">CoinJoin TX</p>
                  <p className="text-xs text-muted-foreground text-center mb-1">All nodes sign</p>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Verified by all participants
                </p>
              </div>
            </Card>

            {/* Step 5: Broadcast */}
            <Card className="p-6 bg-green-500/10 backdrop-blur-sm border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 mx-auto">
                  <EyeOff className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">Broadcast</h3>
                
                <div className="text-center mb-3">
                  <p className="text-sm font-semibold text-green-500 flex items-center gap-1.5 justify-center">
                    17M DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /> Mixed
                  </p>
                </div>
                
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="px-3 py-2 rounded bg-green-500/10 border border-green-500/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-green-500">•</span> ??? 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-green-500/10 border border-green-500/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-green-500">•</span> ??? 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-green-500/10 border border-green-500/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-green-500">•</span> ??? 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Unlinkable outputs
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Supply Transparency</h3>
            <p className="text-muted-foreground">
              Total supply remains fully transparent and auditable on the blockchain. Privacy without compromising verifiability.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Non-Custodial</h3>
            <p className="text-muted-foreground">
              You maintain full control of your coins throughout the mixing process. No trusted third parties required.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Post-Quantum Ready</h3>
            <p className="text-muted-foreground">
              Built with future-proof cryptography designed to resist attacks from quantum computers.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoinMixing;
