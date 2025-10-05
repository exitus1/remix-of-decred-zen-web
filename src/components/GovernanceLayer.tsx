import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vote, FileText, Coins, GitBranch, ArrowUp, Pickaxe, Shield } from "lucide-react";

const GovernanceLayer = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Stakeholder-Controlled Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Decred's governance layer empowers the same stakeholders who secure the network to also control its future
          </p>
        </div>

        <div className="relative animate-fade-in">
          {/* Governance Layer (Top) */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card/50 to-card/50 backdrop-blur-sm border-primary/50 mb-8 relative z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold shadow-lg">
                GOVERNANCE LAYER
              </Badge>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-4">
              {/* Proposal Voting */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-primary/50 relative">
                  <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg animate-glow-pulse"></div>
                  <FileText className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="font-bold mb-2">Proposals</h3>
                <p className="text-sm text-muted-foreground">Vote on new features & changes</p>
              </div>

              {/* Treasury Control */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-primary/50 relative">
                  <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg animate-glow-pulse"></div>
                  <Coins className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="font-bold mb-2">Treasury</h3>
                <p className="text-sm text-muted-foreground">Control spending & funding</p>
              </div>

              {/* Consensus Rules */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-primary/50 relative">
                  <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg animate-glow-pulse"></div>
                  <GitBranch className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="font-bold mb-2">Upgrades</h3>
                <p className="text-sm text-muted-foreground">Approve protocol changes</p>
              </div>

              {/* Policy Decisions */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-primary/50 relative">
                  <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg animate-glow-pulse"></div>
                  <Shield className="w-8 h-8 text-primary relative z-10" />
                </div>
                <h3 className="font-bold mb-2">Policies</h3>
                <p className="text-sm text-muted-foreground">Set network direction</p>
              </div>
            </div>
          </Card>

          {/* Connection Arrow */}
          <div className="flex flex-col items-center -my-4 relative z-20">
            <div className="flex flex-col items-center gap-2">
              <ArrowUp className="w-8 h-8 text-primary" />
              <div className="text-center bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                <p className="text-sm font-semibold text-primary">Same Ticket Holders</p>
                <p className="text-xs text-muted-foreground">Dual Role: Validate + Govern</p>
              </div>
              <ArrowUp className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Consensus Layer (Bottom) */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 relative z-10">
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <Badge variant="outline" className="bg-card px-6 py-2 text-sm font-bold shadow-lg border-border/50">
                CONSENSUS LAYER
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* PoW Miners */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-blue-500/20 flex items-center justify-center border-2 border-blue-500/50">
                  <Pickaxe className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-bold mb-2">PoW Miners</h3>
                <p className="text-sm text-muted-foreground">Create new blocks</p>
                <p className="text-xs text-muted-foreground mt-1">60% reward</p>
              </div>

              {/* PoS Voters */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-green-500/20 flex items-center justify-center border-2 border-green-500/50 relative">
                  <div className="absolute inset-0 rounded-xl bg-green-500/30 blur-lg animate-glow-pulse"></div>
                  <Vote className="w-8 h-8 text-green-500 relative z-10" />
                </div>
                <h3 className="font-bold mb-2 text-green-500">PoS Stakeholders</h3>
                <p className="text-sm text-muted-foreground">Validate blocks</p>
                <p className="text-xs text-muted-foreground mt-1">30% reward</p>
              </div>

              {/* Treasury */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-purple-500/20 flex items-center justify-center border-2 border-purple-500/50">
                  <Coins className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-bold mb-2">Treasury</h3>
                <p className="text-sm text-muted-foreground">Fund development</p>
                <p className="text-xs text-muted-foreground mt-1">10% allocation</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Insight */}
        <Card className="mt-12 p-8 bg-primary/5 border-primary/30 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Vote className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">True Stakeholder Sovereignty</h3>
              <p className="text-muted-foreground">
                By purchasing tickets, stakeholders gain <span className="font-semibold text-foreground">two powers</span>: 
                the ability to validate blocks (securing the network and earning rewards) and the right to vote on 
                proposals, treasury spending, and consensus changes. This dual role ensures that those who secure 
                the network also control its evolution—making Decred a truly stakeholder-governed cryptocurrency.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GovernanceLayer;
