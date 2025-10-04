import { Card } from "@/components/ui/card";
import { Pickaxe, Vote, CheckCircle2, ArrowDown, Shield } from "lucide-react";

const HybridConsensus = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Hybrid PoW/PoS Consensus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The perfect balance of security and stakeholder governance
          </p>
        </div>

        {/* Main Infographic */}
        <div className="mb-16 animate-fade-in">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side - PoW Mining */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-blue-500/20 flex items-center justify-center border-2 border-blue-500/50 relative">
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-lg animate-glow-pulse"></div>
                    <Pickaxe className="w-12 h-12 text-blue-500 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Proof of Work</h3>
                  <p className="text-muted-foreground">Miners Create Blocks</p>
                </div>

                <div className="space-y-4 pl-6 border-l-2 border-blue-500/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-500 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Find Block</h4>
                      <p className="text-sm text-muted-foreground">Miners solve cryptographic puzzles to create new blocks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-500 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Propose Block</h4>
                      <p className="text-sm text-muted-foreground">Block is broadcast to the network for validation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-500 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Receive 60%</h4>
                      <p className="text-sm text-muted-foreground">Miners get 60% of block reward</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - PoS Voting */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-green-500/20 flex items-center justify-center border-2 border-green-500/50 relative">
                    <div className="absolute inset-0 rounded-2xl bg-green-500/30 blur-lg animate-glow-pulse"></div>
                    <Vote className="w-12 h-12 text-green-500 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Proof of Stake</h3>
                  <p className="text-muted-foreground">Stakeholders Validate</p>
                </div>

                <div className="space-y-4 pl-6 border-l-2 border-green-500/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-500 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Buy Ticket</h4>
                      <p className="text-sm text-muted-foreground">Lock DCR to purchase a voting ticket</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-500 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Vote on Block</h4>
                      <p className="text-sm text-muted-foreground">5 tickets randomly selected to approve/reject block</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-500 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Receive 30%</h4>
                      <p className="text-sm text-muted-foreground">Voters get 30% of block reward</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Connection */}
            <div className="my-8 flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-blue-500/50 to-green-500/50"></div>
                <ArrowDown className="w-8 h-8 text-primary" />
                <div className="h-px w-20 bg-gradient-to-r from-green-500/50 to-blue-500/50"></div>
              </div>
            </div>

            {/* Final Result */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center border-2 border-primary relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-lg animate-glow-pulse"></div>
                <CheckCircle2 className="w-10 h-10 text-primary relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Block Confirmed</h3>
              <p className="text-muted-foreground mb-1">
                Requires at least 3 of 5 PoS votes to approve PoW block
              </p>
              <p className="text-sm text-muted-foreground">
                10% goes to treasury for development funding
              </p>
            </div>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Double Defense</h3>
            <p className="text-muted-foreground">
              Both miners and stakeholders must approve blocks, making attacks exponentially more difficult and costly.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Vote className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Stakeholder Control</h3>
            <p className="text-muted-foreground">
              PoS voters have final say on blocks, preventing miner centralization and ensuring community governance.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Pickaxe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Proven Security</h3>
            <p className="text-muted-foreground">
              PoW provides battle-tested network security while PoS adds accountability and democratic oversight.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HybridConsensus;
