import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Treasury = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Self-Funding Treasury
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Decred's treasury automatically receives 10% of every block reward, creating a sustainable funding mechanism 
            that's controlled entirely by stakeholders—no foundations, no VCs, no external dependencies.
          </p>
        </div>

        {/* Treasury Flow Diagram */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Block Reward Source */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-2 border-primary mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Block Reward</div>
                </div>
              </div>
            </div>

            {/* Distribution */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting lines */}
              <div className="hidden md:block absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              {/* PoW Miners */}
              <div className="text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 h-12 w-[1px] bg-primary/30" />
                <div className="p-8 rounded-xl bg-secondary border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">60%</div>
                  <h3 className="text-xl font-semibold mb-3">PoW Miners</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure the network by solving computational puzzles and proposing new blocks
                  </p>
                </div>
              </div>

              {/* PoS Voters */}
              <div className="text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 h-12 w-[1px] bg-primary/30" />
                <div className="p-8 rounded-xl bg-secondary border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <h3 className="text-xl font-semibold mb-3">PoS Voters</h3>
                  <p className="text-sm text-muted-foreground">
                    Validate blocks and vote on governance proposals through ticket staking
                  </p>
                </div>
              </div>

              {/* Treasury */}
              <div className="text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 h-12 w-[1px] bg-primary/30" />
                <div className="p-8 rounded-xl bg-primary/10 border border-primary">
                  <div className="text-4xl font-bold text-primary mb-2">10%</div>
                  <h3 className="text-xl font-semibold mb-3">Treasury</h3>
                  <p className="text-sm text-muted-foreground">
                    Funds development, marketing, and operations—controlled by stakeholder votes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treasury Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-primary mr-2" />
              <div className="text-3xl font-bold text-primary">$100M+</div>
            </div>
            <p className="text-sm text-muted-foreground">Treasury Value (USD)</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">800K+</div>
            <p className="text-sm text-muted-foreground">DCR in Treasury</p>
          </div>
          
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Stakeholder Controlled</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">How Treasury Spending Works</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold mb-1">Proposal Submission</h4>
                <p className="text-sm text-muted-foreground">Anyone can submit a proposal on Politeia for treasury funding</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold mb-1">Community Discussion</h4>
                <p className="text-sm text-muted-foreground">Proposals are debated and refined through public discussion</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold mb-1">Stakeholder Vote</h4>
                <p className="text-sm text-muted-foreground">Ticket holders vote on-chain with binding results (60% approval required)</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold mb-1">Execution & Payment</h4>
                <p className="text-sm text-muted-foreground">Approved contractors deliver work and receive payment from the treasury</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group"
          >
            View Treasury Balance
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Treasury;
