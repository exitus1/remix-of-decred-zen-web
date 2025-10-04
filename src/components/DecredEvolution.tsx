import { ArrowRight, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const DecredEvolution = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Next Iteration of Bitcoin
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Decred inherits Bitcoin's security and scarcity while evolving its governance and sustainability model.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Bitcoin */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6 text-center">Bitcoin</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Proof-of-Work security</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">21M supply cap</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Decentralized network</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">No formal governance</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Development relies on donations</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Miner-only consensus</span>
                </div>
              </div>
            </Card>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="relative">
                <ArrowRight className="w-12 h-12 text-primary animate-pulse" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-sm font-semibold text-primary">Evolution</span>
                </div>
              </div>
            </div>

            {/* Decred */}
            <Card className="p-8 bg-card border-primary/50 hover-glow">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">Decred</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Hybrid PoW/PoS security</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">21M supply cap</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Decentralized network</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">On-chain governance</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Self-funded treasury (10%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Stakeholder consensus power</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Innovations */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 border-primary/20">
              <h4 className="font-bold mb-2 text-primary">Governance Built-In</h4>
              <p className="text-sm text-muted-foreground">
                Stakeholders vote on consensus rules and proposals directly on-chain.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 border-primary/20">
              <h4 className="font-bold mb-2 text-primary">Sustainable Funding</h4>
              <p className="text-sm text-muted-foreground">
                Treasury automatically funds development without relying on external parties.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 border-primary/20">
              <h4 className="font-bold mb-2 text-primary">Enhanced Security</h4>
              <p className="text-sm text-muted-foreground">
                Hybrid consensus requires both miners and stakers to secure the network.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecredEvolution;
