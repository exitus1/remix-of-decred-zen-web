import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Governance = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              True Stakeholder Governance
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Decred pioneered on-chain governance where stakeholders have binding votes on consensus changes, 
              treasury spending, and project policies through Politeia—your vote isn't advisory, it's final.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h3 className="text-lg font-semibold mb-2">Stake DCR</h3>
              <p className="text-sm text-muted-foreground">
                Lock DCR to purchase tickets. Each ticket grants voting rights on consensus rules and treasury proposals.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h3 className="text-lg font-semibold mb-2">Vote On-Chain</h3>
              <p className="text-sm text-muted-foreground">
                Cast binding votes on protocol upgrades, policy changes, and contractor payments from the treasury.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h3 className="text-lg font-semibold mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Receive ~10% annual rewards for participating in governance and securing the network.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group"
            >
              Explore Politeia
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
