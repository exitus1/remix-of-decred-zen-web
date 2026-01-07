import { ArrowRight, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import bitcoinIcon from "@/assets/bitcoin-logo-round.png";
import decredIcon from "@/assets/decred-icon.jpg";

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
          <div className="flex items-start justify-center gap-4 max-w-3xl mx-auto">
            {/* Bitcoin */}
            <Card className="p-10 bg-card border-border w-72">
              <div className="flex items-center justify-center gap-3 mb-8">
                <img src={bitcoinIcon} alt="Bitcoin" className="w-10 h-10 rounded-full" />
                <h3 className="text-2xl font-bold">Bitcoin</h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Proof-of-Work security</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">21M supply cap</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">Decentralized network</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-base text-muted-foreground">No formal governance</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-base text-muted-foreground">Relies on donations</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-base text-muted-foreground">Miner-only consensus</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-base text-muted-foreground">No built-in privacy</span>
                </div>
              </div>
            </Card>

            {/* Arrow */}
            <div className="flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            {/* Decred */}
            <Card className="p-10 bg-card border-primary/50 hover-glow w-80">
              <div className="flex items-center justify-center gap-3 mb-8">
                <img src={decredIcon} alt="Decred" className="w-10 h-10 rounded-full" />
                <h3 className="text-2xl font-bold text-primary">Decred</h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base font-medium">Hybrid PoW/PoS security</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base font-medium">21M supply cap</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base font-medium">Decentralized network</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base font-medium">On-chain governance</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base font-medium">Self-funded treasury</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base font-medium">Stakeholder consensus</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base font-medium">P2P Privacy Mixnet</span>
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
