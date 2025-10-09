import { Card } from "@/components/ui/card";
import { Shield, Eye, Lock, ArrowRight } from "lucide-react";

const CoinMixing = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Privacy Through StakeShuffle
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Decentralized coin mixing that preserves transparency while protecting your privacy
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="mb-16 animate-fade-in">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="grid md:grid-cols-5 gap-6 items-center">
              {/* Step 1: Input */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                  <Lock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Your Coins</h3>
                <p className="text-sm text-muted-foreground">Identifiable DCR from your wallet</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Traceable on-chain</p>
              </div>

              <ArrowRight className="hidden md:block w-8 h-8 text-primary/50 mx-auto" />

              {/* Step 2: Mixing Pool */}
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-glow-pulse"></div>
                  <div className="relative w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Mixing Pool</h3>
                <p className="text-sm text-muted-foreground">Peer-coordinated shuffling</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Non-custodial mixing</p>
              </div>

              <ArrowRight className="hidden md:block w-8 h-8 text-primary/50 mx-auto" />

              {/* Step 3: Output */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/50">
                  <Shield className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Private Output</h3>
                <p className="text-sm text-muted-foreground">Anonymous DCR with broken links</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Untraceable destination</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground">
                StakeShuffle breaks the link between input and output addresses through decentralized peer coordination, ensuring your transaction history remains private while maintaining full control of your funds.
              </p>
            </div>
          </Card>
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
