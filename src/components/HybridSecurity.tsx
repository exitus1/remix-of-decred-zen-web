import { Shield, Pickaxe, Vote, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const HybridSecurity = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">Security Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Dual-Layer</span> Security
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Decred's hybrid consensus combines Proof-of-Work and Proof-of-Stake to create a security model 
            that's significantly more resilient than pure PoW chains.
          </p>
        </div>

        {/* Visual Security Diagram */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Central Block */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {/* PoW Layer */}
              <div className="flex-1 flex flex-col items-center">
                <Card className="p-6 bg-card/80 border-primary/30 backdrop-blur-sm w-full max-w-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-orange-500/20">
                      <Pickaxe className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="font-bold text-lg">Proof-of-Work</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Miners compete to propose new blocks using computational power.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    Block Creation
                  </div>
                </Card>
              </div>

              {/* Arrow / Connection */}
              <div className="flex flex-col items-center py-4 md:py-0 md:px-6">
                <div className="hidden md:block w-16 h-px bg-gradient-to-r from-orange-400 to-orange-400/50" />
                <div className="md:hidden h-8 w-px bg-gradient-to-b from-orange-400 to-orange-400/50" />
                <div className="my-2 p-3 rounded-full bg-primary/20 border border-primary/40">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/50 to-primary" />
                <div className="md:hidden h-8 w-px bg-gradient-to-b from-primary/50 to-primary" />
              </div>

              {/* PoS Layer */}
              <div className="flex-1 flex flex-col items-center">
                <Card className="p-6 bg-card/80 border-primary/30 backdrop-blur-sm w-full max-w-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Vote className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Proof-of-Stake</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stakeholders vote to validate blocks before finalization.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Block Validation
                  </div>
                </Card>
              </div>
            </div>

            {/* Result Arrow */}
            <div className="flex justify-center my-6">
              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-green-400/50" />
                <div className="w-3 h-3 border-r-2 border-b-2 border-green-400/50 transform rotate-45 -mt-1" />
              </div>
            </div>

            {/* Final Block */}
            <div className="flex justify-center">
              <Card className="p-6 bg-gradient-to-br from-green-500/10 to-primary/10 border-green-500/30 backdrop-blur-sm max-w-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Lock className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-bold text-lg">Finalized Block</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Only blocks approved by both miners AND stakeholders become part of the chain.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Pure PoW */}
          <Card className="p-6 bg-card/50 border-red-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/20">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-semibold">Pure Proof-of-Work</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-muted-foreground">51% attack requires only hashpower</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-muted-foreground">Miners have unchecked control over blocks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-muted-foreground">No stakeholder oversight on consensus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-muted-foreground">Single point of failure</span>
              </li>
            </ul>
          </Card>

          {/* Decred Hybrid */}
          <Card className="p-6 bg-card/50 border-green-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/20">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold">Decred Hybrid PoW/PoS</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-muted-foreground">Attack requires hashpower AND stake</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-muted-foreground">Stakeholders validate every block</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-muted-foreground">Checks and balances between parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-muted-foreground">Exponentially higher attack cost</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Attack Cost Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            <span className="text-primary font-medium">Result:</span> To attack Decred, an adversary would need to acquire 
            majority hashpower <span className="italic">and</span> majority stake simultaneously—making attacks 
            economically impractical.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HybridSecurity;
