import { ArrowRight, Users, FileText, Vote, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const ConsensusUpgrade = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Consensus Upgrade Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No chain splits. No contentious forks. Just smooth, stakeholder-driven upgrades.
            </p>
          </div>

          {/* Main Process Flow */}
          <div className="relative mb-20">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0" />
            
            <div className="grid md:grid-cols-5 gap-6 relative z-10">
              {/* Step 1: Proposal */}
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                    <FileText className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Proposal</h3>
                  <p className="text-sm text-muted-foreground">
                    Developers submit consensus upgrade proposal
                  </p>
                </div>
              </Card>

              {/* Step 2: Code Review */}
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                    <Shield className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Code Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Community reviews and tests the upgrade code
                  </p>
                </div>
              </Card>

              {/* Step 3: Stakeholder Vote */}
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative animate-pulse">
                    <Vote className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Vote</h3>
                  <p className="text-sm text-muted-foreground">
                    Ticket holders vote Yes or No on-chain
                  </p>
                </div>
              </Card>

              {/* Step 4: Quorum Check */}
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Quorum</h3>
                  <p className="text-sm text-muted-foreground">
                    Must reach 75% Yes votes to pass
                  </p>
                </div>
              </Card>

              {/* Step 5: Activation */}
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative hover-glow">
                    <Zap className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Activate</h3>
                  <p className="text-sm text-muted-foreground">
                    Upgrade activates automatically—no splits
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Voting Requirements */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
              <div className="text-5xl font-bold text-primary mb-3">75%</div>
              <p className="text-lg font-semibold mb-2">Approval Threshold</p>
              <p className="text-sm text-muted-foreground">
                Requires 75% Yes votes to activate upgrade
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
              <div className="text-5xl font-bold text-primary mb-3">8,064</div>
              <p className="text-lg font-semibold mb-2">Voting Window</p>
              <p className="text-sm text-muted-foreground">
                Blocks (~4 weeks) for stakeholders to vote
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
              <div className="text-5xl font-bold text-primary mb-3">100%</div>
              <p className="text-lg font-semibold mb-2">Binding Result</p>
              <p className="text-sm text-muted-foreground">
                Vote outcome is final and automatic
              </p>
            </Card>
          </div>

          {/* Success Examples - Compact */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">Proven Track Record</h3>
                  <p className="text-sm text-muted-foreground">Lightning Network, Block Header Commitments, Subsidy Split—all passed with 89-99% approval. Zero chain splits.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsensusUpgrade;
