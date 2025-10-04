import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Governance = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Governance by the Community
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Decred's governance system puts control in the hands of stakeholders. 
              Vote on protocol changes, treasury spending, and project direction through Politeia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h3 className="text-lg font-semibold mb-2">Propose</h3>
              <p className="text-sm text-muted-foreground">
                Submit proposals for network upgrades or treasury funding
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h3 className="text-lg font-semibold mb-2">Vote</h3>
              <p className="text-sm text-muted-foreground">
                Stakeholders cast votes weighted by their staked DCR
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h3 className="text-lg font-semibold mb-2">Execute</h3>
              <p className="text-sm text-muted-foreground">
                Approved changes are implemented by the development team
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
